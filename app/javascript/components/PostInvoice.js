import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';


class PostInvoice extends React.Component {

  state = {
    editorState: EditorState.createEmpty()
  }

  constructor(props) {
    super(props)
    this.state = {editorState: EditorState.createEmpty()}
    this.onChange = (editorState) => this.setState({editorState})
    this.setEditor = (editor) => {
      this.editor = editor
    }
    this.focusEditor = () => {
      if (this.editor) {
        this.editor.focus()
      }
    };
  }


  componentDidMount() {
    this.focusEditor()
  }

  render () {
    return (
      <div>
        <h2 className="has-text-centered title is-h6 has-text-dark"> Creating an Invoice</h2>
        <div className="section container is-fluid">
          <div className="columns">
            <div className="column is-half">
              <form>
                <div className="feild">
                  <div className="control">
                    <input class="input" type="text" placeholder="Invoice Title"/>
                  </div>
                </div>

                {/* Editor code */}
                <div style={styles.editor} onClick={this.focusEditor}>
                    <Editor
                      ref={this.setEditor}
                      editorState={this.state.editorState}
                      onChange={this.onChange}
                    />
                </div>


              </form>
            </div>
            <div className="column is-half">
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostInvoice
