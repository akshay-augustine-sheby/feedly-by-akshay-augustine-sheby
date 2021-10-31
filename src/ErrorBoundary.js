import React from "react"
import img from "./Group 2.svg"
import { Button } from "@bigbinary/neetoui/v2";
import { Home } from "@bigbinary/neeto-icons";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
      
    }
    
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log(error);
    }
    
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
            <div className="mt-52">
                <img className="object-none h-56 w-full" src={img} alt="No image" />
                <h1 className="mt-7 mb-7">You have landed somewhere unknown.</h1>
                <Button
                                    iconPosition="left"
                                    size="large"
                                    label="Take me home"
                                    icon={Home}
                                    onClick={() => {}}
                                    style="secondary"
                                />
            </div>
        
        );
      }
  
      return this.props.children; 
    }
  }
  export default ErrorBoundary;