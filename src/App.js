import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Message from './component/Message';
import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';
import StyleSheet from './component/StyleSheet';
import Inline from './component/inline';
import './component/appStyle.css';
import styles from './component/appStyles.module.css'
import Form from './component/Form';
import LifecycleA from './component/LifecycleA';
import FragmentDemo from './component/FragmentDemo';
import Table from './component/Table';
import PureComp from './component/PureComp';
import ParentComp from './component/ParentComp';
import RefsDemo from './component/RefsDemo';
import FocusInput from './FocusInput';
import FRParentInput from './component/FRParentInput';
import PortalDemo from './component/PortalDemo';
import Hero from './component/Hero';
import ErrorBoundary from './component/ErrorBoundary';
import ClickCounter from './component/Higher_Order_Component/ClickCounter';
import HoverCounter from './component/Higher_Order_Component/HoverCounter';
function App() {
  return (
    <div className="App">
      {/* <LifecycleA /> */}
      <HoverCounter />
      <ClickCounter />
      {/* <Table /> */}
      {/* <ParentComp /> */}
      {/* <ErrorBoundary>
        <Hero heroName='Batman' />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName='Superman' />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName='Joker' />
      </ErrorBoundary> */}



      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <PureComp /> */}
      {/* <FragmentDemo /> */}
      {/* <StyleSheet primary = {false}></StyleSheet> */}
      {/* <Inline /> */}
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <FunctionClick /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <ParentComponent /> */}
      {/* <Greet name = "Bruce"/>
      <button>Action</button>
      <Greet name = "Willis"/>
      <Greet name = "Wayne"/> */}
      {/* <Message /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
