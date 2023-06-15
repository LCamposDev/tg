"use client";

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { BsBoxSeam } from 'react-icons/bs';
import { HiOutlineTableCells } from 'react-icons/hi2';
import { TbEdit } from 'react-icons/tb';

// Importe os componentes das páginas que você deseja rotear
import EditPage from './pages/EditPage.js';
import TablesPage from './pages/TablesPage.js';
import BoxesPage from './pages/BoxesPage.js';

export default function Home() {
  return (
    <Router>
      <main>
        <div className="background">
          <div className="tab-navigate">
            {/* Adicione os links para as rotas */}
            <Link to="/edit">Editar</Link>
            <Link to="/tables">Tabelas</Link>
            <Link to="/boxes">Caixas</Link>
          </div>
        </div>
        <div className="icon">
          <button>
            {/* Adicione o link para a rota */}
            <Link to="/edit">
              <TbEdit className="cicon" />
            </Link>
          </button>
          <button>
            <Link to="/tables">
              <HiOutlineTableCells className="cicon" />
            </Link>
          </button>
          <button>
            <Link to="/boxes">
              <BsBoxSeam className="cicon" />
            </Link>
          </button>
        </div>

        {/* Defina as rotas */}
        <Switch>
          <Route path="/edit">
            <EditPage />
          </Route>
          <Route path="/tables">
            <TablesPage />
          </Route>
          <Route path="/boxes">
            <BoxesPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
