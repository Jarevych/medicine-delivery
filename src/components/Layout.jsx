import {Header} from './Header'
import { LayoutStyled } from './LayoutStyled'
 const Layout = ({children}) => {
return (
    <LayoutStyled>
        <Header/>
        <main>{children}</main>
    </LayoutStyled>
)

}

export default Layout