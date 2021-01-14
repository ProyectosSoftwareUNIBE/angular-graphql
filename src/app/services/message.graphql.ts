import gql from 'graphql-tag';

export const GET_MESSAGES = gql`
  {
    getMessages{
      _id
      author
      content
      title
    }
  }
`;

export const ADD_MESSAGE = gql`
  mutation AddMessage($title:String!,$content:String!,$author:String!){
    createMessage(
      title: $title
      content: $content
      author: $author
    ){
      _id
    }
  }
`;

export const DELETE_MESSAGE = gql`
  mutation DelteMessage($id:String!){
    deleteMessage(id:$id){
      _id
    }
  }
`;
