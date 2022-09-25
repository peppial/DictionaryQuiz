import Words from '../components/words';
import Cookies from 'js-cookie'
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function WordsPage() {

    const [text, setText] = useState();
    const [arrayFrom, setArrayFrom] = useState();
    const [arrayTo, setArrayTo] = useState();
    const [selectedFrom, setSelectedFrom] = useState(Cookies.get('languageFrom'));
    const [selectedTo, setSelectedTo] = useState(Cookies.get('languageTo'));

    useEffect(() => {
        start();
    }, [selectedFrom, selectedTo]);

    const handleChangeFrom = event => {
        console.log(event.target.value);
        Cookies.set('languageFrom', event.target.value, { expires: 30 });
        setSelectedFrom(event.target.value);

    };
    const handleChangeTo = event => {
        console.log(event.target.value);
        Cookies.set('languageTo', event.target.value, { expires: 30 });
        setSelectedTo(event.target.value);

    };

    const start = () => {

        if (!selectedFrom || !selectedTo) return;
        const file1 = `./en-${selectedFrom}.csv`;
        const file2 = `./en-${selectedTo}.csv`;


        fetch(file1)
            .then(response => response.text())
            .then(responseText => {
                csvFileToArrayFrom(responseText);
            });
        fetch(file2)
            .then(response => response.text())
            .then(responseText => {
                csvFileToArrayTo(responseText);
            })

    };

    const csvFileToArrayFrom = (string) => {
        const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
        setArrayFrom(csvRows);
    };
    const csvFileToArrayTo = (string) => {
        const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
        setArrayTo(csvRows);
    };
    const css = `
.languageSelect {
    margin:10px;
    padding:10px;
}
.nowrap{
  white-space:nowrap;
}`

    return (

        <div>
            <nav className="fh5co-nav" role="navigation">
                <div className="top-menu">
                    <div className="container margined">
                        <div className="row">
                            <div className="col-xs-8">
                                <div id="fh5co-logo"><a href="index.html">Duo Words<span>.</span></a></div>
                            </div>
                            <div className="col-xs-4 text-right menu-1">
                                <ul>
                                    <li className="active" style={{ display: selectedFrom && selectedTo ? 'block' : 'none' }}><a href="#" onClick={() => { Cookies.set('languageFrom', ''); Cookies.set('languageTo', ''); window.location.reload(); }}>Restart</a></li>
                                    <Link to="/getstarted" className="active nowrap" style={{ display: selectedFrom && selectedTo ? 'none' : 'block' }}>Get Started</Link>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
            <div className="container center">
                <div className="row">
                    <style>{css}</style>
                    <header className="fh5co-footer-links">
                        <div style={{ display: selectedFrom && selectedTo ? 'none' : 'block' }}>
                            <select name="fromLanguage" id="fromLanguage" value={selectedFrom} onChange={handleChangeFrom} className="languageSelect">
                                <option value="">Language you speak</option>
                                <option value="en">English</option>
                                <option value="ar">Arabic</option>
                                <option value="bn">Bengali</option>
                                <option value="bg">Bulgarian</option>
                                <option value="zh-CN">Chinese</option>
                                <option value="cs">Czech</option>
                                <option value="da">Danish</option>
                                <option value="nl">Dutch</option>
                                <option value="fr">French</option>
                                <option value="de">German</option>
                                <option value="hi">Hindi</option>
                                <option value="id">Indonesian</option>
                                <option value="it">Italian</option>
                                <option value="ko">Korean</option>
                                <option value="pt">Portuguese</option>
                                <option value="ru">Russian</option>
                                <option value="es">Spanish</option>
                            </select><br />
                            <select name="toLanguage" id="toLanguage" value={selectedTo} onChange={handleChangeTo} className="languageSelect">
                                <option value="">Language you want to learn</option>
                                <option value="en">English</option>
                                <option value="ar">Arabic</option>
                                <option value="bn">Bengali</option>
                                <option value="bg">Bulgarian</option>
                                <option value="zh-CN">Chinese</option>
                                <option value="cs">Czech</option>
                                <option value="da">Danish</option>
                                <option value="nl">Dutch</option>
                                <option value="fr">French</option>
                                <option value="de">German</option>
                                <option value="hi">Hindi</option>
                                <option value="id">Indonesian</option>
                                <option value="it">Italian</option>
                                <option value="ko">Korean</option>
                                <option value="pt">Portuguese</option>
                                <option value="ru">Russian</option>
                                <option value="es">Spanish</option>
                            </select>
                        </div>
                        <Words arrayFrom={arrayFrom} arrayTo={arrayTo} languageFrom={selectedFrom} languageTo={selectedTo} isLoaded={selectedFrom && selectedTo} />

                    </header>
                </div>

            </div>
        </div>

    );
}

export default WordsPage;