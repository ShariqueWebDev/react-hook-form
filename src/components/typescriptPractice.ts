//1
type ObjectProps = {
  id: number;
  name: string;
  status: boolean;
};

const obj: ObjectProps = {
  id: 1,
  name: "sharique",
  status: true,
};

//2
type NestedObjectProps = {
  id: number;
  name: string;
  status: boolean;
  child?: NestedObjectProps;
};

const nestedObj: NestedObjectProps = {
  id: 1,
  name: "John",
  status: true,
  child: {
    id: 2,
    name: "Deo",
    status: false,
  },
};

//3
type ArrayOfObjectProps = {
  id: number;
  name: string;
  status: boolean;
  //   child?: NestedObjectProps;
}[];

const arrayOfObject: ArrayOfObjectProps = [
  {
    id: 1,
    name: "John",
    status: true,
  },
  {
    id: 1,
    name: "John",
    status: true,
  },
];

//4
type ArrayOfNestedObjectProps = {
  id: number;
  name: string;
  status: boolean;
  child: NestedObjectProps;
}[];

const arrayofNestedObject: ArrayOfNestedObjectProps = [
  {
    id: 1,
    name: "John",
    status: true,
    child: {
      id: 2,
      name: "deo",
      status: false,
    },
  },
];

//5
type NestedArrayOfObject = {
  id: number;
  name: string;
  status: boolean;
  child?: NestedArrayOfObject;
}[];

type ArrayofNestedArrayofObject = {
  id: number;
  name: string;
  status: boolean;
  child: NestedArrayOfObject;
}[];

const arrayOfNestedArrayOfObject: ArrayofNestedArrayofObject = [
  {
    id: 1,
    name: "william",
    status: true,
    child: [
      { id: 1, name: "william", status: true },
      { id: 1, name: "william", status: true },
    ],
  },
];

//6
type ObjectInArray = {
  id: number;
  name: string;
  status: boolean;
  child?: ObjectInArray[];
};

type InArrayAndObjectProps = (string | { detail: ObjectInArray })[];

const inArrayAndObject: InArrayAndObjectProps = [
  "",
  {
    detail: {
      id: 1,
      name: "william",
      status: true,
      child: [
        {
          id: 1,
          name: "william",
          status: true,
        },
      ],
    },
  },
  "dfshf",
];

type SingleDynamicObjectProps = {
  [key: string]: string | number | boolean;
};

const singleDynamicObject: SingleDynamicObjectProps = {
  name: "rakesh",
  age: 20,
  isRestriction: false,
};

type DynamicNestedObjectProps = {
  [key: string]: string | number | boolean | DynamicNestedObjectProps;
};

const dynamicNestedObject: DynamicNestedObjectProps = {
  name: "rahul",
  city: "mumbai",
  isActive: true,
  others: {
    mobileNo: 8254445646,
    status: false,
  },
};
/////////////////////

type DynamicObjectOfArray = {
  [key: string]: string | number | boolean | DynamicObjectOfArray;
}[];

type DynamicNestedObjectOfArrayProps = (
  | any
  | {
      [key: string]: string | number | boolean | DynamicObjectOfArray;
    }
)[];

const dynamicNestedObjectOfArray = [
  "",
  4654,
  true,
  false,
  null,
  {
    id: 25,
    name: "Jeo",
    profession: [{}],
  },
];

// if the keyof is typeof of ROLES
export type Role = keyof typeof ROLES;
// this means ==> type Role = 'admin' | 'moderator' | 'user';

export  type Permission = (typeof ROLES)[Role][number];
// this means ==> type Permission  = 'view:comments' | 'view:comments'

const ROLES = {
  admin: [
    "view:comments",
    "create:comments",
    "update:comments",
    "delete:comments",
  ],
  moderator: ["view:comments", "create:comments", "delete:comments"],
  user: ["view:comments", "create:comments"],
} as const;

export function hasPermission(
  user: { id: string; role: Role },
  permission: Permission
) {
  return (ROLES[user.role] as readonly Permission[]).includes(permission);
}

const userData = {
  name:"sharique",
  age:30,
  profession:"Web developer"
} as const

type GetObjKey = keyof typeof userData;

type DefineType = (typeof userData)[GetObjKey]
