import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_MESSAGES = gql`
  {
    message{
        _id
        title
        content
        author
    }
  }
`;

const MessageList = () => {
    const { loading, error, data } = useQuery(GET_MESSAGES);
    if(loading) return <p>Loading Message...</p>
    if(error){
        return <p>Error</p>
    }

    return(
        <div className="row">
            <div className="col-md-6 offset-md-3">
                {
                    data.message.map(({_id, title, content, auther}) => (
                        <div className="card m-2" key={_id}> 
                            <div className="card-body">
                                <h4>{title}</h4>
                                <p>{content}</p>
                                <p>{auther}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MessageList;
