// only edit the import.ts.source, and not the import.ts directly.
// it needs to be transpile by babel to import the .gql into code
/* tslint:disable */
/* eslint-disable */
var accountUpdateDefaultWalletId = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "accountUpdateDefaultWalletId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AccountUpdateDefaultWalletIdInput" },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "accountUpdateDefaultWalletId" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "account" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "id" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "defaultWalletId" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 256,
    source: {
      body: "mutation accountUpdateDefaultWalletId($input: AccountUpdateDefaultWalletIdInput!) {\n  accountUpdateDefaultWalletId(input: $input) {\n    errors {\n      __typename\n      message\n    }\n    account {\n      __typename\n      id\n      defaultWalletId\n    }\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var userLoginUpgrade = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UserLoginUpgrade" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UserLoginUpgrade" },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userLoginUpgrade" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "authToken" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 144,
    source: {
      body: "mutation UserLoginUpgrade($input: UserLoginUpgrade!) {\n  userLoginUpgrade(input: $input) {\n    errors {\n      message\n    }\n    authToken\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var userDeviceAccountCreate = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UserDeviceAccountCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UserDeviceAccountCreateInput" },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userDeviceAccountCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "authToken" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 170,
    source: {
      body: "mutation UserDeviceAccountCreate($input: UserDeviceAccountCreateInput!) {\n  userDeviceAccountCreate(input: $input) {\n    errors {\n      message\n    }\n    authToken\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var captchaCreateChallenge = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "captchaCreateChallenge" },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "captchaCreateChallenge" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "result" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "id" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "challengeCode" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "newCaptcha" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "failbackMode" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 218,
    source: {
      body: "mutation captchaCreateChallenge {\n  captchaCreateChallenge {\n    errors {\n      __typename\n      message\n    }\n    result {\n      __typename\n      id\n      challengeCode\n      newCaptcha\n      failbackMode\n    }\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var captchaRequestAuthCode = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "captchaRequestAuthCode" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CaptchaRequestAuthCodeInput" },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "captchaRequestAuthCode" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "success" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 182,
    source: {
      body: "mutation captchaRequestAuthCode($input: CaptchaRequestAuthCodeInput!) {\n  captchaRequestAuthCode(input: $input) {\n    errors {\n      __typename\n      message\n    }\n    success\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var deviceNotificationTokenCreate = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "deviceNotificationTokenCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "DeviceNotificationTokenCreateInput" },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deviceNotificationTokenCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "success" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 203,
    source: {
      body: "mutation deviceNotificationTokenCreate($input: DeviceNotificationTokenCreateInput!) {\n  deviceNotificationTokenCreate(input: $input) {\n    errors {\n      __typename\n      message\n    }\n    success\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var intraLedgerPaymentSend = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "intraLedgerPaymentSend" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "IntraLedgerPaymentSendInput" },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "intraLedgerPaymentSend" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "status" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 181,
    source: {
      body: "mutation intraLedgerPaymentSend($input: IntraLedgerPaymentSendInput!) {\n  intraLedgerPaymentSend(input: $input) {\n    errors {\n      __typename\n      message\n    }\n    status\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var intraLedgerUsdPaymentSend = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "intraLedgerUsdPaymentSend" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "IntraLedgerUsdPaymentSendInput" },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "intraLedgerUsdPaymentSend" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "status" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 190,
    source: {
      body: "mutation intraLedgerUsdPaymentSend($input: IntraLedgerUsdPaymentSendInput!) {\n  intraLedgerUsdPaymentSend(input: $input) {\n    errors {\n      __typename\n      message\n    }\n    status\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var lnInvoiceCreate = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "lnInvoiceCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "LnInvoiceCreateInput" },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "lnInvoiceCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "invoice" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "paymentHash" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "paymentRequest" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "paymentSecret" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "satoshis" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 260,
    source: {
      body: "mutation lnInvoiceCreate($input: LnInvoiceCreateInput!) {\n  lnInvoiceCreate(input: $input) {\n    errors {\n      __typename\n      message\n    }\n    invoice {\n      __typename\n      paymentHash\n      paymentRequest\n      paymentSecret\n      satoshis\n    }\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var lnInvoiceCreateOnBehalfOfRecipient = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "lnInvoiceCreateOnBehalfOfRecipient" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "LnInvoiceCreateOnBehalfOfRecipientInput" },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "lnInvoiceCreateOnBehalfOfRecipient" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "invoice" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "paymentHash" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "paymentRequest" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "paymentSecret" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "satoshis" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 321,
    source: {
      body: "mutation lnInvoiceCreateOnBehalfOfRecipient(\n  $input: LnInvoiceCreateOnBehalfOfRecipientInput!\n) {\n  lnInvoiceCreateOnBehalfOfRecipient(input: $input) {\n    errors {\n      __typename\n      message\n    }\n    invoice {\n      __typename\n      paymentHash\n      paymentRequest\n      paymentSecret\n      satoshis\n    }\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var lnInvoiceFeeProbe = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "lnInvoiceFeeProbe" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "LnInvoiceFeeProbeInput" },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "lnInvoiceFeeProbe" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "amount" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 166,
    source: {
      body: "mutation lnInvoiceFeeProbe($input: LnInvoiceFeeProbeInput!) {\n  lnInvoiceFeeProbe(input: $input) {\n    errors {\n      __typename\n      message\n    }\n    amount\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var lnInvoicePaymentSend = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "lnInvoicePaymentSend" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "LnInvoicePaymentInput" },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "lnInvoicePaymentSend" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "status" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 171,
    source: {
      body: "mutation lnInvoicePaymentSend($input: LnInvoicePaymentInput!) {\n  lnInvoicePaymentSend(input: $input) {\n    errors {\n      __typename\n      message\n    }\n    status\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var lnNoAmountInvoiceCreate = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "lnNoAmountInvoiceCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "LnNoAmountInvoiceCreateInput" },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "lnNoAmountInvoiceCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "invoice" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "paymentHash" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "paymentRequest" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "paymentSecret" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 269,
    source: {
      body: "mutation lnNoAmountInvoiceCreate($input: LnNoAmountInvoiceCreateInput!) {\n  lnNoAmountInvoiceCreate(input: $input) {\n    errors {\n      __typename\n      message\n    }\n    invoice {\n      __typename\n      paymentHash\n      paymentRequest\n      paymentSecret\n    }\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var lnNoAmountInvoiceFeeProbe = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "lnNoAmountInvoiceFeeProbe" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "LnNoAmountInvoiceFeeProbeInput" },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "lnNoAmountInvoiceFeeProbe" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "amount" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 190,
    source: {
      body: "mutation lnNoAmountInvoiceFeeProbe($input: LnNoAmountInvoiceFeeProbeInput!) {\n  lnNoAmountInvoiceFeeProbe(input: $input) {\n    errors {\n      __typename\n      message\n    }\n    amount\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var lnNoAmountInvoicePaymentSend = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "lnNoAmountInvoicePaymentSend" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "LnNoAmountInvoicePaymentInput" },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "lnNoAmountInvoicePaymentSend" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "status" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 195,
    source: {
      body: "mutation lnNoAmountInvoicePaymentSend($input: LnNoAmountInvoicePaymentInput!) {\n  lnNoAmountInvoicePaymentSend(input: $input) {\n    errors {\n      __typename\n      message\n    }\n    status\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var lnNoAmountUsdInvoiceFeeProbe = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "lnNoAmountUsdInvoiceFeeProbe" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "LnNoAmountUsdInvoiceFeeProbeInput" },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "lnNoAmountUsdInvoiceFeeProbe" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "amount" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 199,
    source: {
      body: "mutation lnNoAmountUsdInvoiceFeeProbe($input: LnNoAmountUsdInvoiceFeeProbeInput!) {\n  lnNoAmountUsdInvoiceFeeProbe(input: $input) {\n    errors {\n      __typename\n      message\n    }\n    amount\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var lnNoAmountUsdInvoicePaymentSend = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "lnNoAmountUsdInvoicePaymentSend" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "LnNoAmountUsdInvoicePaymentInput" },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "lnNoAmountUsdInvoicePaymentSend" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "status" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 204,
    source: {
      body: "mutation lnNoAmountUsdInvoicePaymentSend($input: LnNoAmountUsdInvoicePaymentInput!) {\n  lnNoAmountUsdInvoicePaymentSend(input: $input) {\n    errors {\n      __typename\n      message\n    }\n    status\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var lnUsdInvoiceCreate = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "lnUsdInvoiceCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "LnUsdInvoiceCreateInput" },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "lnUsdInvoiceCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "invoice" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "paymentHash" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "paymentRequest" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "paymentSecret" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "satoshis" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 269,
    source: {
      body: "mutation lnUsdInvoiceCreate($input: LnUsdInvoiceCreateInput!) {\n  lnUsdInvoiceCreate(input: $input) {\n    errors {\n      __typename\n      message\n    }\n    invoice {\n      __typename\n      paymentHash\n      paymentRequest\n      paymentSecret\n      satoshis\n    }\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var lnUsdInvoiceCreateOnBehalfOfRecipient = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "lnUsdInvoiceCreateOnBehalfOfRecipient" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "LnUsdInvoiceCreateOnBehalfOfRecipientInput" },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "lnUsdInvoiceCreateOnBehalfOfRecipient" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "invoice" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "paymentHash" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "paymentRequest" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "paymentSecret" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "satoshis" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 330,
    source: {
      body: "mutation lnUsdInvoiceCreateOnBehalfOfRecipient(\n  $input: LnUsdInvoiceCreateOnBehalfOfRecipientInput!\n) {\n  lnUsdInvoiceCreateOnBehalfOfRecipient(input: $input) {\n    errors {\n      __typename\n      message\n    }\n    invoice {\n      __typename\n      paymentHash\n      paymentRequest\n      paymentSecret\n      satoshis\n    }\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var lnUsdInvoiceFeeProbe = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "lnUsdInvoiceFeeProbe" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "LnUsdInvoiceFeeProbeInput" },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "lnUsdInvoiceFeeProbe" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "amount" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 175,
    source: {
      body: "mutation lnUsdInvoiceFeeProbe($input: LnUsdInvoiceFeeProbeInput!) {\n  lnUsdInvoiceFeeProbe(input: $input) {\n    errors {\n      __typename\n      message\n    }\n    amount\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var onChainAddressCurrent = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "onChainAddressCurrent" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "OnChainAddressCurrentInput" },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "onChainAddressCurrent" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "address" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 179,
    source: {
      body: "mutation onChainAddressCurrent($input: OnChainAddressCurrentInput!) {\n  onChainAddressCurrent(input: $input) {\n    errors {\n      __typename\n      message\n    }\n    address\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var onChainPaymentSend = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "onChainPaymentSend" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "OnChainPaymentSendInput" },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "onChainPaymentSend" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "status" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 169,
    source: {
      body: "mutation onChainPaymentSend($input: OnChainPaymentSendInput!) {\n  onChainPaymentSend(input: $input) {\n    errors {\n      __typename\n      message\n    }\n    status\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var userContactUpdateAlias = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userContactUpdateAlias" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UserContactUpdateAliasInput" },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userContactUpdateAlias" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 170,
    source: {
      body: "mutation userContactUpdateAlias($input: UserContactUpdateAliasInput!) {\n  userContactUpdateAlias(input: $input) {\n    errors {\n      __typename\n      message\n    }\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var userLogin = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userLogin" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "UserLoginInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userLogin" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "authToken" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 145,
    source: {
      body: "mutation userLogin($input: UserLoginInput!) {\n  userLogin(input: $input) {\n    errors {\n      __typename\n      message\n    }\n    authToken\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var userQuizQuestionUpdateCompleted = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userQuizQuestionUpdateCompleted" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UserQuizQuestionUpdateCompletedInput" },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userQuizQuestionUpdateCompleted" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "userQuizQuestion" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "question" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "earnAmount" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "completed" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 297,
    source: {
      body: "mutation userQuizQuestionUpdateCompleted($input: UserQuizQuestionUpdateCompletedInput!) {\n  userQuizQuestionUpdateCompleted(input: $input) {\n    errors {\n      __typename\n      message\n    }\n    userQuizQuestion {\n      question {\n        id\n        earnAmount\n      }\n      completed\n    }\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var userUpdateLanguage = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userUpdateLanguage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UserUpdateLanguageInput" },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userUpdateLanguage" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "id" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "language" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 216,
    source: {
      body: "mutation userUpdateLanguage($input: UserUpdateLanguageInput!) {\n  userUpdateLanguage(input: $input) {\n    errors {\n      __typename\n      message\n    }\n    user {\n      __typename\n      id\n      language\n    }\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var userUpdateUsername = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userUpdateUsername" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UserUpdateUsernameInput" },
            },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userUpdateUsername" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "id" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "username" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 216,
    source: {
      body: "mutation userUpdateUsername($input: UserUpdateUsernameInput!) {\n  userUpdateUsername(input: $input) {\n    errors {\n      __typename\n      message\n    }\n    user {\n      __typename\n      id\n      username\n    }\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
const MUTATIONS = {
  accountUpdateDefaultWalletId,
  userLoginUpgrade,
  userDeviceAccountCreate,
  captchaCreateChallenge,
  captchaRequestAuthCode,
  deviceNotificationTokenCreate,
  intraLedgerPaymentSend,
  intraLedgerUsdPaymentSend,
  lnInvoiceCreate,
  lnInvoiceCreateOnBehalfOfRecipient,
  lnInvoiceFeeProbe,
  lnInvoicePaymentSend,
  lnNoAmountInvoiceCreate,
  lnNoAmountInvoiceFeeProbe,
  lnNoAmountInvoicePaymentSend,
  lnNoAmountUsdInvoiceFeeProbe,
  lnNoAmountUsdInvoicePaymentSend,
  lnUsdInvoiceCreate,
  lnUsdInvoiceCreateOnBehalfOfRecipient,
  lnUsdInvoiceFeeProbe,
  onChainAddressCurrent,
  onChainPaymentSend,
  userContactUpdateAlias,
  userLogin,
  userQuizQuestionUpdateCompleted,
  userUpdateLanguage,
  userUpdateUsername,
}
var myUpdates = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "subscription",
      name: { kind: "Name", value: "myUpdates" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "recentTransactions" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          defaultValue: { kind: "IntValue", value: "5" },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "myUpdates" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "me" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Me" },
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "update" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "type" },
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "Price" },
                        },
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "base" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "offset" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "currencyUnit" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "formattedAmount" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "LnUpdate" },
                        },
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "walletId" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "paymentHash" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "OnChainUpdate" },
                        },
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "walletId" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "txNotificationType" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "txHash" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "displayCurrencyPerSat" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "IntraLedgerUpdate" },
                        },
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "walletId" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "txNotificationType" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "displayCurrencyPerSat" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 634,
    source: {
      body: "subscription myUpdates($recentTransactions: Int = 5) {\n  myUpdates {\n    errors {\n      message\n    }\n    me {\n      ...Me\n    }\n    update {\n      type: __typename\n      ... on Price {\n        base\n        offset\n        currencyUnit\n        formattedAmount\n      }\n      ... on LnUpdate {\n        walletId\n        paymentHash\n        status\n      }\n      ... on OnChainUpdate {\n        walletId\n        txNotificationType\n        txHash\n        amount\n        displayCurrencyPerSat\n      }\n      ... on IntraLedgerUpdate {\n        walletId\n        txNotificationType\n        amount\n        displayCurrencyPerSat\n      }\n    }\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var lnInvoicePaymentStatus = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "subscription",
      name: { kind: "Name", value: "myUpdates" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "recentTransactions" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          defaultValue: { kind: "IntValue", value: "5" },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "myUpdates" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "errors" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "me" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Me" },
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "update" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "type" },
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "Price" },
                        },
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "base" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "offset" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "currencyUnit" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "formattedAmount" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "LnUpdate" },
                        },
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "walletId" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "paymentHash" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "OnChainUpdate" },
                        },
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "walletId" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "txNotificationType" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "txHash" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "displayCurrencyPerSat" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "InlineFragment",
                        typeCondition: {
                          kind: "NamedType",
                          name: { kind: "Name", value: "IntraLedgerUpdate" },
                        },
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "walletId" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "txNotificationType" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "displayCurrencyPerSat" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 634,
    source: {
      body: "subscription myUpdates($recentTransactions: Int = 5) {\n  myUpdates {\n    errors {\n      message\n    }\n    me {\n      ...Me\n    }\n    update {\n      type: __typename\n      ... on Price {\n        base\n        offset\n        currencyUnit\n        formattedAmount\n      }\n      ... on LnUpdate {\n        walletId\n        paymentHash\n        status\n      }\n      ... on OnChainUpdate {\n        walletId\n        txNotificationType\n        txHash\n        amount\n        displayCurrencyPerSat\n      }\n      ... on IntraLedgerUpdate {\n        walletId\n        txNotificationType\n        amount\n        displayCurrencyPerSat\n      }\n    }\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
const SUBSCRIPTIONS = {
  myUpdates,
  lnInvoicePaymentStatus,
}
var main = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "main" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "isAuthenticated" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "recentTransactions" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "globals" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nodesIds" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "network" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "lightningAddressDomain" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "btcPrice" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "base" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "offset" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "currencyUnit" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "formattedAmount" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            arguments: [],
            directives: [
              {
                kind: "Directive",
                name: { kind: "Name", value: "include" },
                arguments: [
                  {
                    kind: "Argument",
                    name: { kind: "Name", value: "if" },
                    value: {
                      kind: "Variable",
                      name: { kind: "Name", value: "isAuthenticated" },
                    },
                  },
                ],
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Me" },
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Me" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "id" },
            arguments: [],
            directives: [],
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "language" },
            arguments: [],
            directives: [],
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "username" },
            arguments: [],
            directives: [],
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "phone" },
            arguments: [],
            directives: [],
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "defaultAccount" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "id" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "defaultWalletId" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "transactions" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "recentTransactions" },
                      },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TransactionList" },
                        directives: [],
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "wallets" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "id" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "balance" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "walletCurrency" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TransactionList" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TransactionConnection" },
      },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "hasNextPage" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "hasPreviousPage" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "startCursor" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "endCursor" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "edges" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "cursor" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "node" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "id" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "direction" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "memo" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "settlementAmount" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "settlementFee" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "settlementCurrency" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "settlementPrice" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "base" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "offset" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "currencyUnit" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "formattedAmount" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "initiationVia" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "__typename" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "InitiationViaIntraLedger" },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "counterPartyWalletId" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "counterPartyUsername" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "InitiationViaLn" },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "paymentHash" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "InitiationViaOnChain" },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "address" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "settlementVia" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "__typename" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "SettlementViaIntraLedger" },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "counterPartyWalletId" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "counterPartyUsername" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "SettlementViaLn" },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "paymentSecret" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "SettlementViaOnChain" },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "transactionHash" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 1550,
    source: {
      body: "query main($isAuthenticated: Boolean!, $recentTransactions: Int) {\n  globals {\n    nodesIds\n    network\n    lightningAddressDomain\n  }\n  btcPrice {\n    base\n    offset\n    currencyUnit\n    formattedAmount\n  }\n  me @include(if: $isAuthenticated) {\n    ...Me\n  }\n}\n\nfragment Me on User {\n  id\n  language\n  username\n  phone\n  defaultAccount {\n    id\n    defaultWalletId\n    transactions(first: $recentTransactions) {\n      ...TransactionList\n    }\n    wallets {\n      id\n      balance\n      walletCurrency\n    }\n  }\n}\n\nfragment TransactionList on TransactionConnection {\n  pageInfo {\n    hasNextPage\n    hasPreviousPage\n    startCursor\n    endCursor\n  }\n  edges {\n    cursor\n    node {\n      __typename\n      id\n      status\n      direction\n      memo\n      createdAt\n\n      settlementAmount\n      settlementFee\n      settlementCurrency\n      settlementPrice {\n        base\n        offset\n        currencyUnit\n        formattedAmount\n      }\n\n      initiationVia {\n        __typename\n        ... on InitiationViaIntraLedger {\n          counterPartyWalletId\n          counterPartyUsername\n        }\n        ... on InitiationViaLn {\n          paymentHash\n        }\n        ... on InitiationViaOnChain {\n          address\n        }\n      }\n      settlementVia {\n        __typename\n        ... on SettlementViaIntraLedger {\n          counterPartyWalletId\n          counterPartyUsername\n        }\n        ... on SettlementViaLn {\n          paymentSecret\n        }\n        ... on SettlementViaOnChain {\n          transactionHash\n        }\n      }\n    }\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var mobileVersions = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "mobileVersions" },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "mobileVersions" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "__typename" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "platform" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "currentSupported" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "minSupported" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 114,
    source: {
      body: "query mobileVersions {\n  mobileVersions {\n    __typename\n    platform\n    currentSupported\n    minSupported\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var transactionList = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "transactionList" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "id" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "defaultAccount" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "id" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "wallets" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transactions" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "first" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "first" },
                                  },
                                },
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "after" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "after" },
                                  },
                                },
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "last" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "last" },
                                  },
                                },
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "before" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "before" },
                                  },
                                },
                              ],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "TransactionList" },
                                    directives: [],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TransactionList" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TransactionConnection" },
      },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "hasNextPage" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "hasPreviousPage" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "startCursor" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "endCursor" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "edges" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "cursor" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "node" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "id" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "direction" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "memo" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "settlementAmount" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "settlementFee" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "settlementCurrency" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "settlementPrice" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "base" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "offset" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "currencyUnit" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "formattedAmount" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "initiationVia" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "__typename" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "InitiationViaIntraLedger" },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "counterPartyWalletId" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "counterPartyUsername" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "InitiationViaLn" },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "paymentHash" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "InitiationViaOnChain" },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "address" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "settlementVia" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "__typename" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "SettlementViaIntraLedger" },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "counterPartyWalletId" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "counterPartyUsername" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "SettlementViaLn" },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "paymentSecret" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "SettlementViaOnChain" },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "transactionHash" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 1330,
    source: {
      body: "query transactionList($first: Int, $after: String, $last: Int, $before: String) {\n  me {\n    id\n    defaultAccount {\n      id\n      wallets {\n        id\n        transactions(first: $first, after: $after, last: $last, before: $before) {\n          ...TransactionList\n        }\n      }\n    }\n  }\n}\n\nfragment TransactionList on TransactionConnection {\n  pageInfo {\n    hasNextPage\n    hasPreviousPage\n    startCursor\n    endCursor\n  }\n  edges {\n    cursor\n    node {\n      __typename\n      id\n      status\n      direction\n      memo\n      createdAt\n\n      settlementAmount\n      settlementFee\n      settlementCurrency\n      settlementPrice {\n        base\n        offset\n        currencyUnit\n        formattedAmount\n      }\n\n      initiationVia {\n        __typename\n        ... on InitiationViaIntraLedger {\n          counterPartyWalletId\n          counterPartyUsername\n        }\n        ... on InitiationViaLn {\n          paymentHash\n        }\n        ... on InitiationViaOnChain {\n          address\n        }\n      }\n      settlementVia {\n        __typename\n        ... on SettlementViaIntraLedger {\n          counterPartyWalletId\n          counterPartyUsername\n        }\n        ... on SettlementViaLn {\n          paymentSecret\n        }\n        ... on SettlementViaOnChain {\n          transactionHash\n        }\n      }\n    }\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var transactionListForContact = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "transactionList" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "id" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "defaultAccount" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "id" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "wallets" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transactions" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "first" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "first" },
                                  },
                                },
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "after" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "after" },
                                  },
                                },
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "last" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "last" },
                                  },
                                },
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "before" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "before" },
                                  },
                                },
                              ],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "TransactionList" },
                                    directives: [],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TransactionList" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TransactionConnection" },
      },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "hasNextPage" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "hasPreviousPage" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "startCursor" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "endCursor" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "edges" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "cursor" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "node" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "id" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "direction" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "memo" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "settlementAmount" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "settlementFee" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "settlementCurrency" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "settlementPrice" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "base" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "offset" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "currencyUnit" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "formattedAmount" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "initiationVia" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "__typename" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "InitiationViaIntraLedger" },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "counterPartyWalletId" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "counterPartyUsername" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "InitiationViaLn" },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "paymentHash" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "InitiationViaOnChain" },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "address" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "settlementVia" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "__typename" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "SettlementViaIntraLedger" },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "counterPartyWalletId" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "counterPartyUsername" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "SettlementViaLn" },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "paymentSecret" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "SettlementViaOnChain" },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "transactionHash" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 1330,
    source: {
      body: "query transactionList($first: Int, $after: String, $last: Int, $before: String) {\n  me {\n    id\n    defaultAccount {\n      id\n      wallets {\n        id\n        transactions(first: $first, after: $after, last: $last, before: $before) {\n          ...TransactionList\n        }\n      }\n    }\n  }\n}\n\nfragment TransactionList on TransactionConnection {\n  pageInfo {\n    hasNextPage\n    hasPreviousPage\n    startCursor\n    endCursor\n  }\n  edges {\n    cursor\n    node {\n      __typename\n      id\n      status\n      direction\n      memo\n      createdAt\n\n      settlementAmount\n      settlementFee\n      settlementCurrency\n      settlementPrice {\n        base\n        offset\n        currencyUnit\n        formattedAmount\n      }\n\n      initiationVia {\n        __typename\n        ... on InitiationViaIntraLedger {\n          counterPartyWalletId\n          counterPartyUsername\n        }\n        ... on InitiationViaLn {\n          paymentHash\n        }\n        ... on InitiationViaOnChain {\n          address\n        }\n      }\n      settlementVia {\n        __typename\n        ... on SettlementViaIntraLedger {\n          counterPartyWalletId\n          counterPartyUsername\n        }\n        ... on SettlementViaLn {\n          paymentSecret\n        }\n        ... on SettlementViaOnChain {\n          transactionHash\n        }\n      }\n    }\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var transactionListForDefaultAccount = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "transactionList" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "id" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "defaultAccount" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "id" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "wallets" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transactions" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "first" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "first" },
                                  },
                                },
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "after" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "after" },
                                  },
                                },
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "last" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "last" },
                                  },
                                },
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "before" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "before" },
                                  },
                                },
                              ],
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "TransactionList" },
                                    directives: [],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TransactionList" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "TransactionConnection" },
      },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "hasNextPage" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "hasPreviousPage" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "startCursor" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "endCursor" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "edges" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "cursor" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "node" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "id" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "direction" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "memo" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "settlementAmount" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "settlementFee" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "settlementCurrency" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "settlementPrice" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "base" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "offset" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "currencyUnit" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "formattedAmount" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "initiationVia" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "__typename" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "InitiationViaIntraLedger" },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "counterPartyWalletId" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "counterPartyUsername" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "InitiationViaLn" },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "paymentHash" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "InitiationViaOnChain" },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "address" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "settlementVia" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "__typename" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "SettlementViaIntraLedger" },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "counterPartyWalletId" },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "counterPartyUsername" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "SettlementViaLn" },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "paymentSecret" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "SettlementViaOnChain" },
                              },
                              directives: [],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "transactionHash" },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 1330,
    source: {
      body: "query transactionList($first: Int, $after: String, $last: Int, $before: String) {\n  me {\n    id\n    defaultAccount {\n      id\n      wallets {\n        id\n        transactions(first: $first, after: $after, last: $last, before: $before) {\n          ...TransactionList\n        }\n      }\n    }\n  }\n}\n\nfragment TransactionList on TransactionConnection {\n  pageInfo {\n    hasNextPage\n    hasPreviousPage\n    startCursor\n    endCursor\n  }\n  edges {\n    cursor\n    node {\n      __typename\n      id\n      status\n      direction\n      memo\n      createdAt\n\n      settlementAmount\n      settlementFee\n      settlementCurrency\n      settlementPrice {\n        base\n        offset\n        currencyUnit\n        formattedAmount\n      }\n\n      initiationVia {\n        __typename\n        ... on InitiationViaIntraLedger {\n          counterPartyWalletId\n          counterPartyUsername\n        }\n        ... on InitiationViaLn {\n          paymentHash\n        }\n        ... on InitiationViaOnChain {\n          address\n        }\n      }\n      settlementVia {\n        __typename\n        ... on SettlementViaIntraLedger {\n          counterPartyWalletId\n          counterPartyUsername\n        }\n        ... on SettlementViaLn {\n          paymentSecret\n        }\n        ... on SettlementViaOnChain {\n          transactionHash\n        }\n      }\n    }\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var accountDefaultWallet = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "accountDefaultWallet" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "username" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Username" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "accountDefaultWallet" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "username" },
                value: { kind: "Variable", name: { kind: "Name", value: "username" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "__typename" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "id" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "walletCurrency" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 144,
    source: {
      body: "query accountDefaultWallet($username: Username!) {\n  accountDefaultWallet(username: $username) {\n    __typename\n    id\n    walletCurrency\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var btcPriceList = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "btcPriceList" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "range" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "PriceGraphRange" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "btcPriceList" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "range" },
                value: { kind: "Variable", name: { kind: "Name", value: "range" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "timestamp" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "price" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "base" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "offset" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "currencyUnit" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "formattedAmount" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 182,
    source: {
      body: "query btcPriceList($range: PriceGraphRange!) {\n  btcPriceList(range: $range) {\n    timestamp\n    price {\n      base\n      offset\n      currencyUnit\n      formattedAmount\n    }\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var businessMapMarkers = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "businessMapMarkers" },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "businessMapMarkers" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "username" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "mapInfo" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "title" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "coordinates" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "longitude" },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "latitude" },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 164,
    source: {
      body: "query businessMapMarkers {\n  businessMapMarkers {\n    username\n    mapInfo {\n      title\n      coordinates {\n        longitude\n        latitude\n      }\n    }\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var contacts = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "contacts" },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "id" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contacts" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "username" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "alias" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "transactionsCount" },
                        arguments: [],
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 109,
    source: {
      body: "query contacts {\n  me {\n    id\n    contacts {\n      username\n      alias\n      transactionsCount\n    }\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var getWalletCsvTransactions = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "defaultWalletCsvTransactions" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "defaultWalletId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "WalletId" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "id" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "defaultAccount" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "id" },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "csvTransactions" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "walletIds" },
                            value: {
                              kind: "ListValue",
                              values: [
                                {
                                  kind: "Variable",
                                  name: { kind: "Name", value: "defaultWalletId" },
                                },
                              ],
                            },
                          },
                        ],
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 175,
    source: {
      body: "query defaultWalletCsvTransactions($defaultWalletId: WalletId!) {\n  me {\n    id\n    defaultAccount {\n      id\n      csvTransactions(walletIds: [$defaultWalletId])\n    }\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var onChainTxFee = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "onChainTxFee" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "walletId" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "WalletId" } },
          },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "address" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "OnChainAddress" } },
          },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "amount" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "SatAmount" } },
          },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "targetConfirmations" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "TargetConfirmations" },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "onChainTxFee" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "walletId" },
                value: { kind: "Variable", name: { kind: "Name", value: "walletId" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "address" },
                value: { kind: "Variable", name: { kind: "Name", value: "address" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "amount" },
                value: { kind: "Variable", name: { kind: "Name", value: "amount" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "targetConfirmations" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "targetConfirmations" },
                },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "amount" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "targetConfirmations" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 316,
    source: {
      body: "query onChainTxFee(\n  $walletId: WalletId!\n  $address: OnChainAddress!\n  $amount: SatAmount!\n  $targetConfirmations: TargetConfirmations\n) {\n  onChainTxFee(\n    walletId: $walletId\n    address: $address\n    amount: $amount\n    targetConfirmations: $targetConfirmations\n  ) {\n    amount\n    targetConfirmations\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var quizQuestions = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "quizQuestions" },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "quizQuestions" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "id" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "earnAmount" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 68,
    source: {
      body: "query quizQuestions {\n  quizQuestions {\n    id\n    earnAmount\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var userDefaultWalletId = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "userDefaultWalletId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "username" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Username" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userDefaultWalletId" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "username" },
                value: { kind: "Variable", name: { kind: "Name", value: "username" } },
              },
            ],
            directives: [],
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 95,
    source: {
      body: "query userDefaultWalletId($username: Username!) {\n  userDefaultWalletId(username: $username)\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var usernameAvailable = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "usernameAvailable" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "username" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Username" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "usernameAvailable" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "username" },
                value: { kind: "Variable", name: { kind: "Name", value: "username" } },
              },
            ],
            directives: [],
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 91,
    source: {
      body: "query usernameAvailable($username: Username!) {\n  usernameAvailable(username: $username)\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
var currencyList = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "currencyList" },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "currencyList" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "code" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "symbol" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "name" },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "flag" },
                  arguments: [],
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: {
    start: 0,
    end: 82,
    source: {
      body: "query currencyList {\n  currencyList {\n    code\n    symbol\n    name\n    flag\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: { line: 1, column: 1 },
    },
  },
}
const QUERIES = {
  accountDefaultWallet,
  btcPriceList,
  businessMapMarkers,
  contacts,
  getWalletCsvTransactions,
  main,
  mobileVersions,
  onChainTxFee,
  quizQuestions,
  transactionList,
  transactionListForContact,
  transactionListForDefaultAccount,
  userDefaultWalletId,
  usernameAvailable,
  currencyList,
}
export { MUTATIONS, SUBSCRIPTIONS, QUERIES }
