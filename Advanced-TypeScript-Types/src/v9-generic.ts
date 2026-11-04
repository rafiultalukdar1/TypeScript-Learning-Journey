// Generic

const wrapInArray = <T> (value : T) => {
    return [value];
}

const stringArr = wrapInArray<string>("ABCD");
const numberArr = wrapInArray<number>(1234);

stringArr.map((item) => item.toUpperCase());


interface User {
    name : string,
    role : string,
};

interface Blog {
    title : string,
    description : string,
    date : string,
};

interface ApiResponse <T> {
    data: T;
    success: boolean;
    statusCode: number;
};

type UserResponse = ApiResponse<User>;
type BlogResponse = ApiResponse<Blog>;

const userRes : ApiResponse<User> = {
    data : {
        name : "Manik",
        role : "Member"
    },
    statusCode : 1234,
    success : true,
};

console.log(userRes);