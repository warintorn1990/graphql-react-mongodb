import React,{ useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const CREATE_MESSAGE = gql`
  mutation CreateMessage($title: String!, $content: String!, $author: String!) {
    createMessage(title: $title, content: $content,  author: $author) {
        _id
        title
        content
        author
    }
  }
`;

const MessageForm = () => {
   // useMutation
   const [content, setContent] = useState('');
   const [title, setTitle] = useState('');
   const [author, setAuther] = useState('');
   const [createMessage] = useMutation(CREATE_MESSAGE);
//    const [createMessage] = useMutation(CREATE_MESSAGE);

   return(
       <div className="row">
           <div className="col-md-6 offset-md-3">
               <div className="card">
                   <div className="card-body">
                       <form onSubmit={async e => {
                           e.preventDefault();
                           await createMessage({ variables: { title, content, author} });
                           window.location.href = '/';
                       }}>
                           <div className="form-group">
                               <input 
                                type="text" 
                                placeholder="Auther" 
                                className="form-control"
                                value={author}
                                onChange={e => setAuther(e.target.value)}
                                />
                           </div>
                           <br/>
                           <div className="form-group">
                               <input 
                                type="text"
                                placeholder="Write a title" 
                                className="form-control"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                />
                           </div>
                           <br/>
                           <div className="form-group">
                               <textarea 
                                rows="2" 
                                placeholder="Content..." 
                                className="form-control"
                                value={content}
                                onChange={e => setContent(e.target.value)}
                                ></textarea>
                           </div>
                           <br/>
                           <button className="btn btn-success btn-block">Save</button>
                       </form>
                   </div>
               </div>
           </div>
       </div>
   )
}

export default MessageForm;
