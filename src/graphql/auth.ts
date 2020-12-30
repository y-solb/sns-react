import {gql} from "@apollo/client";

/*auth.ts - 서버로 날려줌*/

export const LOGIN = gql`
    mutation login($studentId: String!, $password: String!){
        login(studentId: $studentId, password: $password)
    }
`; 

export const LOCAL_LOGIN = gql` #client.ts안에 cache는 로컬이라는 개념
    mutation logUserIn($token: String!){
        logUserIn(token:$token) @client
    }
`;

export const JOIN = gql`
    mutation join(
        $studentId: String!
        $password: String!
        $firstName: String!
        $lastName: String!
    ){
        join(
        studentId: $studentId
        password: $password
        firstName: $firstName
        lastName: $lastName
        ){
            id
        }
    }
`;

