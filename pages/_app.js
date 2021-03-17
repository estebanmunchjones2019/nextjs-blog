//this component is just for importing global css and could keep the state when
//switching pages

//global styles can be created anywhere in the project
import '../styles/global.css';

export default function App({Component, pageProps}){
    return <Component {...pageProps}></Component>;
}

//altough <App> is not imported in any file, it's aumatically added
// as wrapper of our app

