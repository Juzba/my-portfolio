import './ResumeHtml.scss';

const ResumeHtml = () => {
    return (
        <div className="resume">
            <h1>Životopis</h1>
            <section className="info">
                <h2>Osobní údaje:</h2>

                <table className="table-udaje">
                    <tr>
                        <th>Jméno:</th>
                        <th>Jiří Strnadel</th>
                    </tr>
                    <tr>
                        <th>Narození:</th>
                        <th>12.8.1988</th>
                    </tr>
                    <tr>
                        <th>Stav:</th>
                        <th>svobodný</th>
                    </tr>
                    <tr>
                        <th>Adresa:</th>
                        <th>Novosady 201, Drahotuše, 753 61</th>
                    </tr>
                    <tr>
                        <th>Telefon:</th>
                        <th>731 238 706</th>
                    </tr>
                    <tr>
                        <th>E-mail:</th>
                        <th>Juzba88@gmail.com</th>
                    </tr>
                </table>
            </section>

            <section className="jobs">
                <h2>Pracovní zkušenosti:</h2>

                <h3>Czech Etimex s.r.o.</h3>

                <table>
                    <tr>
                        <th>Elektro údržbář</th>
                        <th>31.10.2012 - trvá</th>
                    </tr>
                </table>
                <p>
                    (Odstraňování el. poruch strojů. Práce a programování robotů REIS, Yaskawa, Kuka. Práce se Vstřikolisy Engel, vyfukovací
                    lisy Hesta, Kautex atd.. Sestavování nových automatizovaných linek. Diagnostika a základní programování plc Simatic
                    S7-300)
                </p>

                <h3>Ellan Hranice s.r.o.</h3>
                <table>
                    <tr>
                        <th>Elektrikář</th>
                        <th>22.6.2009 - 21.6.2011</th>
                    </tr>
                </table>
                <p>(Elektroinstalace, elektro montáže a servis solárních systémů.)</p>

                <h3>Strojtos Lipník a.s.</h3>
                <table>
                    <tr>
                        <th>Elektrikář</th>
                        <th>3.6.2008 - 30.4.2009</th>
                    </tr>
                </table>
                <p>(Elektroinstalace a údržba CNC frézek.)</p>
            </section>

            <section className="study">
                <h2>Vzdělání:</h2>

                <table>
                    <tr>
                        <th>Střední škola elektrotechnická, Lipník nad Bečvou</th>
                        <th>2003 - 2007</th>
                    </tr>
                </table>

                <p>(obor mechanik elektronik se zaměřením na automatizaci, maturitní zkouška)</p>
            </section>

            <section className="courses">
                <h2>Další vzdělání a kurzy:</h2>
                <p>§8 dle vyhlášky č. 50/1978 Sb. do 1000V</p>
            </section>

            <section className="other">
                <h2>Ostatní:</h2>

                <table>
                    <tr>
                        <th>Dovednosti:</th>
                        <th>
                            Programování C#, Typescript, Sass, Html, React. Programování robotů Reis, Yaskawa, Kuka. Plc Simatic S7-300,
                            S7-400.
                        </th>
                    </tr>
                    <tr>
                        <th>Řidičský p.:</th>
                        <th>sk. B</th>
                    </tr>
					<tr>
                        <th>Vlastnosti:</th>
                        <th>spolehlivost, pečlivost, samostatnost, trpělivost</th>
                    </tr>
                    <tr>
                        <th>Jazyk:</th>
                        <th>Angličtina - pasivně</th>
                    </tr>
                </table>
            </section>
        </div>
    );
};

export default ResumeHtml;
