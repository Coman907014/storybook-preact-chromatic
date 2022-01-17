/** @jsx h */
import { FunctionComponent, h } from "preact";
import './LayoutContainer.less';


const LayoutContainer: FunctionComponent<{ classes?: string; children: any }> = ({ classes, children }) => {
  
  return (
    <div className={`layoutContainer container ${classes}`}>
      { children }
    </div>
  )
}

export default LayoutContainer