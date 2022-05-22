import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      id
      content
      video
      likes
      commentsCount
      writer {
        id
        name
      }
      createdAt
    }
  }
`;

export const LIKE_BOARD = gql`
  mutation likeBoard($boardId: String!) {
    likeBoard(boardId: $boardId)
  }
`;
