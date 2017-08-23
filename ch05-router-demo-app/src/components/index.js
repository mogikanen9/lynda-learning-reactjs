import { MainMenu } from './ui/MainMenu'
import { About } from './ui/About'

export const Left = ({children}) =>
<div className="page">
    <MainMenu className="main-menu" />
    <About />
   {children}
</div>

export const Right = ({children}) =>
<div className="page">
    {children}
    <MainMenu className="main-menu" />
</div>

export const Whoops404 = ({ location }) =>
    <div>
        <h1>Whoops, resource not foundqqq</h1>
        <p>Could not find {location.pathname}</p>
    </div>
