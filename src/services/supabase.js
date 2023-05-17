
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://ofdjwjoyquyfyzlahymy.supabase.co', import.meta.env.VITE_SUPABASE_API_KEY);

//uważać na znaki cudzysłowu przy kluczu supabase, w VS nie było ich i działało

export default supabase;

