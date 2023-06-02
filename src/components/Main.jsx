import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import supabase from "../services/supabase.js";

import MainContentText from "./MainContentText.jsx";
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
                { entry: text.value, author: session.session.user.email, done: false },])
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

    //////////
    const handleDone = async (id) => {
            setEntries(entries.map(task => {
            if (task.id === id) {
                task.done = !task.done;
            }
            console.log(task.done);
            console.log(task);

            return task;   //DZIAŁA NIE RUSZAĆ !!!!!!!!!!!!!!!!!!!!!!!!!!!
        }));

        console.log(entries.done);
        console.log(entries.id);
        const { error } = await supabase
            .from('entries')
            .update( { done: entries.find(task => task.id === id).done } )
            .eq('id', id);

        if (!error) {
            console.log(entries);
        }
     }

    const handleRenewList = async () => {

        const renewList = entries.map(list => {
            list.done = false;
            return list;
        });

        console.log(entries);
        console.log(renewList);

        const {error} = await supabase
            .from('entries')
            .update( {done: false})
            .eq('done', true);

        if(!error) {
            setEntries(renewList);
        }
    }

    ////////
    return (
        <div className='main-div'>
            <div className='main-container-div'>
                <div className='main-top-bar'>
                    <p className='main-top-bar-logo'>ReadyToGo</p>
                    <button className='main-top-bar-btn' onClick={handleLogout}>Wyloguj</button>
                </div>
                <MainContentText />

                <div className='todolist-container'>
                    <form className='main-form' onSubmit={handleSaveText}>
                        <input className='main-form-input' id='text' type='text' placeholder='Wpisz pierwszą rzecz do spakowania...'/>
                        <button className='main-form-btn'>Dodaj</button>
                    </form>
                    {
                        entries && (
                            <ul>
                                {
                                    entries.map(({entry, id, done}) =>
                                        <li key={id} onClick={() => handleDone(id)} className={done ? 'done' : ''}>
                                            {entry}
                                            <button type='button' onClick={() => handleRemove(id)}>Usuń wiersz</button>
                                        </li>)
                                }
                            </ul>
                        )
                    }
                    <button className='main-btn-renewlist' onClick={handleRenewList}>Przywróć listę</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Main;
