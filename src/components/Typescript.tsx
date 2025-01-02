import React from "react";
import { hasPermission, Role } from "./typescriptPractice";

const Typescript = () => {
  //RECURSIVE TYPE
  type MenuItemsProps = {
    id: string | number;
    label: string;
    name?: string;
    children?: MenuItemsProps[];
  };

  const menu: MenuItemsProps[] = [
    {
      id: "1",
      label: "Menu 1",
      children: [
        { id: "1-1", label: "Submenu 1-1", name: "sharique" },
        { id: "1-2", label: "Submenu 1-2" },
      ],
    },
  ];

  const firstChild = menu?.[0]?.children?.[0]?.id;
  console.log(firstChild);

  //DISCRIMINATED UNIONS
  type ShapProps =
    | { kind: "circle"; radius: number }
    | { kind: "rectangle"; width: number; height: number }
    | { kind: "triangle"; base: number; height: number };

  const rectangle: ShapProps = {
    kind: "rectangle",
    width: 10,
    height: 5,
  };

  const circle: ShapProps = {
    kind: "circle",
    radius: 5,
  };

  type MultipleObjectType =
    | {
        name: string;
        age: number;
        id: number;
        status: boolean;
      }
    | { name: string; age: number };

  const employee: MultipleObjectType = {
    name: "sharique",
    age: 30,
    id: 69555655246545,
    status: true,
  };

  const owner: MultipleObjectType = {
    name: "anas",
    age: 28,
  };

  const CompanyProfileHandler = (owner: MultipleObjectType): string => {
    if (owner.name === "anas") {
      return "Victor is owner of dpc";
    } else {
      return "this is employee profile";
    }
  };

  function calculateArea(shape: ShapProps): number {
    if (shape.kind === "circle") {
      return Math.PI * shape.radius ** 2;
    } else if (shape.kind === "rectangle") {
      return shape.width * shape.height;
    } else if (shape.kind === "triangle") {
      return 0.5 * shape.base * shape.height;
    } else {
      throw new Error("Invalid shape");
    }
  }

  //MAPPED (PARTIAL) /////////////////
  type User = {
    id: string;
    name: string;
    email: string;
  };

  const userPartail: Partial<User> = {
    name: "John",
  };
  userPartail.name = "dfjsdlfj";

  // cannot change value read only
  const userReadonly: Readonly<User> = {
    name: "John",
    id: "1",
    email: "s@gmai.com",
  };

  type ExtractArrayType<T> = T extends infer U ? U : never;
  type StringArray = string;
  type StringArrayFlat = string[];
  type ExtractedType = ExtractArrayType<StringArray>;
  type ExtractedTypeFlat = ExtractArrayType<StringArrayFlat>;

  const extractArray: ExtractedType[] = ["", ""];
  const extraArrayFlat: ExtractedTypeFlat[] = [[""], [""]];

  //////////////////////////////////////////////

  type ApiResponseProps<Data> = {
    data: Data;
    isError: boolean;
  };

  type UserResponseProps = ApiResponseProps<{ name: string; age: number }>;

  type BlogResponseProps = ApiResponseProps<{ title: string }>;

  const userRes: UserResponseProps = {
    data: {
      name: "Jhonson Dwan",
      age: 25,
    },
    isError: true,
  };

  const blogRes: BlogResponseProps = {
    data: {
      title: "Doe willson",
    },
    isError: true,
  };

  type UserDetailProps = {
    name: string;
    age: number;
  };

  type UserLocationProps = {
    city: string;
    isLive: boolean;
  };

  // INTERSECTION TYPE
  type UserCombineDetailProps = UserDetailProps & UserLocationProps;

  // UNION TYPE
  type UserSomeDetailProps = UserDetailProps | UserLocationProps;

  const userDetails: UserDetailProps = {
    name: "Harry ban",
    age: 25,
  };
  const userLocation: UserLocationProps = {
    city: "mumbai",
    isLive: true,
  };

  const userDetails2: UserCombineDetailProps = {
    name: "Othr william",
    age: 22,
    city: "New York",
    isLive: false,
  };

  const userSomeDetails: UserSomeDetailProps = {
    name: "ashley",
    age: 20,
    city: "Canada",
  };

  // INDEX SIGNITURE
  // we can use this type when object will be dynamic
  type DynamicObject = {
    [key: string]: string | number | boolean;
  }[];

  const DynamicTypeData: DynamicObject = [
    {
      name: "Alice",
      age: 30,
      occupation: true,
    },
  ];
  // INDEX SIGNITURE
  // DYNAMIC DATA IN ARRAY OF OBJECT FORM
  type DetailsProps = {
    [key: string]: string | number | boolean;
  };

  type DynamicDetailsProps = (any | { details: DetailsProps[] })[];

  type Details = {
    name: string;
    age: number;
    city: string;
    PANno: number;
    status: boolean;
  };
  type ArrayString = any | { details: Details[] };

  const arryWithDynamicObject: DynamicDetailsProps = [
    "1",
    "2",
    1,
    {
      details: [
        {
          name: "Rakesh",
          age: 26,
          city: "mumbai",
          PANno: 2522412564,
          status: false,
        },
      ],
    },
  ];

  console.log(arryWithDynamicObject?.[3]?.details?.[0]?.name);

  // UTILITY TYPE (PICK)
  type UserUtility = {
    name: string;
    email: string;
    status: boolean;
  };
  // METHOD 1
  const utility: Pick<UserUtility, "email"> = {
    email: "s@g.com",
  };

  // METHOD 2
  type UtilityWithoutEmail = Omit<UserUtility, "email">;

  const omitUtility: UtilityWithoutEmail = {
    name: "xyz",
    status: false,
  };

  // DEEP NESTED OBJECT
  type DeepNestedObjProp = {
    [key: string]: string | number | boolean | DeepNestedObjProp;
  };

  type Immutable<T> = {
    readonly [k in keyof T]: Immutable<T[k]>;
  };

  type DeepObjectToNestedObjectProps = Immutable<DeepNestedObjProp>;

  // MUTABLE OBJECT
  const nestedObjProps: DeepNestedObjProp = {
    name: "sdfjs",
    no: 1,
    child: {
      name: "dfsdjflsd",
      status: false,
    },
  };

  // IMMUTABLE OBJECT
  const nestedImmutableObject: DeepObjectToNestedObjectProps = {
    name: "",
    no: 1,
    child: {
      name: "nnnn",
      status: false,
    },
  };

  // DYNAMIC NESTED ARRAY
  type DynamicNestedArray = (
    | DynamicNestedArray
    | { id: string; value: string }
  )[];

  const dynamicData: DynamicNestedArray = [
    { id: "1", value: "Item 1" },
    [
      { id: "1-1", value: "Nested Item 1-1" },
      [{ id: "1-1-1", value: "Deeply Nested Item 1-1-1" }],
    ],
  ];

  type DynamicObjectNestedArray = (
    | DynamicObjectNestedArray
    | {
        [key: string]: string | number | boolean;
      }
    | any
  )[];

  const DynamicObjNestedArr: DynamicObjectNestedArray = [
    { name: "dsf", id: 1, isError: false },
    [
      {
        name: "djf",
        city: "mum",
      },
      {
        surname: "dsjf",
        arr: [
          { name: "nestedToNested" },
          {
            lastName: "willson",
          },
        ],
      },
    ],
    "sfsdf",
    true,
    546546,
  ];

  // CALLBACK FUNCTION
  type Callback = (error: Error | null, result: string) => void;

  function fetchData(callback: Callback): void {
    callback(null, "data loaded");
  }

  // Deep immutable Array
  // type DeepReadonly<T> = {
  //   readonly [K in keyof T]: T[K] extends object
  //     ? T[K] extends Function
  //       ? T[K]
  //       : DeepReadonly<T[K]>
  //     : T[K];
  // };

  // type DeepImmutableArrayProps<T> = readonly DeepReadonly<T>[];

  // type NestedArray = {
  //   id: number;
  //   values: string[];
  // };

  // const immutableArray: DeepImmutableArrayProps<NestedArray> = [
  //   {
  //     id: 1,
  //     values: ["sfs", "ef"],
  //   },
  // ];

  const user: { id: string; role: Role } = { id: "2", role: "admin" };
  const authorId = "1";

  return (
    <>
      <div>{calculateArea(rectangle)}</div>
      <div>{calculateArea(circle)}</div>
      <div className="">{CompanyProfileHandler(owner)}</div>
      <div className="">
        {hasPermission(user, "delete:comments") && (
          <div>
            <button className="bg-[#fa850f] text-white px-5 py-2 font-medium rounded-md ml-10 mt-5 cursor-pointer">Delete</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Typescript;
