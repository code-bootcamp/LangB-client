import { gql } from "@apollo/client";

// 커뮤니티 글 삭제
export const DELETE_COMMUNITY_BOARD = gql`
  mutation deleteCommunityBoard($communityBoardId: String!) {
    deleteCommunityBoard(communityBoardId: $communityBoardId)
  }
`;

// 커뮤니티 좋아요 갯수 불러오기
export const LIKE_COMMUNITY_BOARD = gql`
  mutation likeCommunityBoard($communityBoardId: String!) {
    likeCommunityBoard(communityBoardId: $communityBoardId)
  }
`;

// 커뮤니티 글 불러오기
export const FETCH_COMMUNITY_BOARD = gql`
  query fetchCommunityBoard {
    fetchCommunityBoard {
      id
      title
      content
      image
      createdAt
      likes
      writer {
        id
        name
      }
    }
  }
`;

// 커뮤니티 좋아요 내역 불러오기
export const FETCH_LIKED_COMMUNITY_BOARD = gql`
  query fetchLikedCommunityBoard($userId: String) {
    fetchLikedCommunityBoard(userId: $userId) {
      id
      isLiked
      communityBoard {
        id
      }
    }
  }
`;
