import $ from "jquery"; //Load jquery
import React, { createRef, useContext, useEffect, useState } from "react"; //For react component
import { MyContext } from "./context";
import ReactJson from 'react-json-view'

window.jQuery = $; //JQuery alias
window.$ = $; //JQuery alias

require("jquery-ui-sortable"); //For FormBuilder Element Drag and Drop
require("formBuilder/dist/form-render.min.js")

const FormRender = () => {
    const { form, setForm } = useContext(MyContext);
    const [ output, setOutput] = useState({});
    const fb = createRef();
    let formRender;

    useEffect(() => {
          console.log(form)
          let formData = form;
          formRender = $(fb.current).formRender({ formData });
    }, [form])

    useEffect(() => {
      console.log(fb)
    }, [])
    function saveData() {
      if(Object.keys($(fb.current)?.formRender("userData")).length > 0) {
        console.log($(fb.current).formRender("userData"))
        setOutput($(fb.current).formRender("userData"))
      }
    }
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <h1>Display Form</h1>
            <form id="fb-render" ref={fb}></form>
            {Object.keys(form).length > 0 && 
            <>
              <button
              onClick={saveData}
              type="button"
              className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                Submit Data
              </button>
              {Object.keys(output).length > 0 &&
                <ReactJson src={JSON.parse(JSON.stringify(output))} />
              }            
            </>
            }

        </div>
    )
}

export default FormRender