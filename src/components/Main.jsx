import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import supabase from "../services/supabase.js";

import Footer from "./Footer.jsx";

function Main() {

    let alreadyMounted = false;
    const navigate = useNavigate();

    const [session, setSession] = useState(null);
    const [entries, setEntries] = useState(null);

    useEffect(() => {
        if (!alreadyMounted) {
            getSession();
        }

        alreadyMounted = true;
    }, []);

    useEffect(() => {
        if (session) {
            getEntries();
        }
    }, [session]);

    const getSession = async () => {
        const { data } = await supabase.auth.getSession();

        if (!data.session) {
            navigate('/signin');
            return;
        }
        setSession(data);
    }

    const getEntries = async () => {
        console.log(session);

        let { data, error } = await supabase.from('entries').select('*').eq('author', session.session.user.email);

        if (!error) {
            setEntries(data);
        }
    };

    const handleLogout = async () => {
        let { error } = await supabase.auth.signOut();

        if (!error) {
            navigate('/signin');
        }
    }

    const handleSaveText = async (e) => {
        e.preventDefault();

        const { text } = e.target.elements;

        const { data, error } = await supabase
            .from('entries')
            .insert([
                { entry: text.value, author: session.session.user.email },])
            .select('*');

        if (!error) {
            setEntries(prev => [...prev, data[0]]);
        }

        e.target.elements[0].value = 'Dodaj kolejną rzecz do spakowania';
    }


    async function handleRemove (id) {
        //console.log(id);
       const newList = entries.filter(li => li.id !== id );

       const { error } = await supabase
            .from('entries')
            .delete()
            .eq('id', id);

        if (!error) {
            setEntries(newList);
        }
    }

    return(
        <>
            <div>
                <button onClick={handleLogout}>Wyloguj</button>
                <h1>Main</h1>
                <form onSubmit={handleSaveText}>
                    <input id='text' type='text' placeholder='Wpisz pierwszą rzecz do spakowania...'/>
                    <button>Zapisz</button>
                </form>
                {
                    entries && (
                        <ul>
                            {
                                entries.map(({entry, id}) => <li key={id}>{entry}
                                    <button type='button' onClick={() => handleRemove(id)}>Usuń wiersz</button>
                                </li>)
                            }
                        </ul>
                    )
                }

            </div>
            <Footer></Footer>
        </>
    );
}

export default Main;
