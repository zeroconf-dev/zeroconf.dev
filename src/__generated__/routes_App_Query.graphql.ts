/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type routes_App_QueryVariables = {};
export type routes_App_QueryResponse = {
    readonly viewer: {
        readonly id: string;
    };
};
export type routes_App_Query = {
    readonly response: routes_App_QueryResponse;
    readonly variables: routes_App_QueryVariables;
};



/*
query routes_App_Query {
  viewer {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "viewer",
    "storageKey": null,
    "args": null,
    "concreteType": "Viewer",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "routes_App_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "routes_App_Query",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "routes_App_Query",
    "id": null,
    "text": "query routes_App_Query {\n  viewer {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '07e6bbf1a428d39af9e2c364f75beffd';
export default node;
