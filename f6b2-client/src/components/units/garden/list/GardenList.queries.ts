import { gql } from '@apollo/client';

export const FETCH_BOARDS = gql`
  query fetchBoards {
    id
    content
    video
    likes
    writer {
      id
      name
    }
    createdAt
  }
`;
