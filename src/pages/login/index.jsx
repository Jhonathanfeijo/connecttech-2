import logo from '../../assets/logo/ConnectTech.svg'
const Login = () => {

    return (
        <>
            <div className="h-screen w-screen bg-principal flex justify-center items-center">
                <div className='w-[900px] max-w-[86%] flex-col md:flex-row flex flex-wrap items-center justify-center gap-14'>
                    <section className='w-full md:w-2/5 '>
                        <img className='w-full' src={logo} alt="" />
                    </section>
                    <section className='w-full lg:w-2/5 text-white'>
                        <form action="" className='flex flex-col'>
                            <label className='text-xl text-principal' htmlFor="">Login</label>
                            <input className='rounded p-1 text-black' type="text" />
                            <label className='text-xl text-principal' htmlFor="">Senha</label>
                            <input className='rounded p-1 text-black' type="password" />
                            <button className='bg-white text-black rounded py-1.5 hover:opacity-80 text-xl my-5'>Entrar</button>
                        </form>
                    </section>
                </div>
            </div>

        </>);
}

export default Login;