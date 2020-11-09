import React from "react"
import { Link } from "gatsby"
import "./mystyles.scss"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Login from "./login"
import Cadastro from './cadastro'
import BattlePage from './battle'
import PokedexPage from './pokedex'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

// const IndexPage = () => (
//   <Router>
//     <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link> <br/>
//     <Link to="/login/">Login</Link> <br/>
//     <Link to="/cadastro/">Cadastro</Link> <br/>
//     <Link to="/using-typescript/">Go to "Using TypeScript"</Link><br/>
//     <Link to="/battle/">Battle</Link>
//   </Layout>
//   </Router>
  
// )
const IndexPage = () =>
<Router>

     <Route path='/cadastro' component={Cadastro}/>
     <Redirect from='*' to='/login'/>
     <Route path='/battle' component={BattlePage}/>
     <Route path='/pokedex' component={PokedexPage}/>
  <Login />
  </Router>

export default IndexPage
