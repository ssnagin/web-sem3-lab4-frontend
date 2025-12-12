import classes from './Header.module.scss';


function Header(){

    return (
        <header className={classes.header + " w-100 d-flex align-items-center justify-content-center"}>
            <div className="w-100 d-flex align-content-center flex-column">
                <h1 className={classes.h1_title + " font-sabrina align-self-center"}>
                    Лабораторная работа 4
                </h1>
                <br />
                <hr className="border border-1 opacity-25"/>

                <p className={"font-hack align-self-center"}>Снагин Станислав P3215 | 321582 вар.</p>
            </div>
        </header>
    )
}

export default Header;