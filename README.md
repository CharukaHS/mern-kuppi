# MERN Kuppi

### Snippets

```json
{
  "Typescript React Function Component": {
    "prefix": "rc",
    "body": [
      "import React from 'react'",
      "",
      "interface ${TM_FILENAME_BASE}Props {",
      "$1",
      "}",
      "",
      "const $TM_FILENAME_BASE: React.FC<${TM_FILENAME_BASE}Props> = ({}) => {",
      "\t\treturn ($3);",
      "}",
      "",
      "export default $TM_FILENAME_BASE;"
    ],
    "description": "Typescript React Function Component"
  },
  "NextJS Typescript React Function Component": {
    "prefix": "nrp",
    "body": [
      "import React from 'react'",
      "import type { NextPage } from 'next'",
      "",
      "const $TM_FILENAME_BASE: NextPage = () => {",
      "\t\treturn ($3);",
      "}",
      "",
      "export default $TM_FILENAME_BASE;"
    ],
    "description": "Typescript React Function Component"
  }
}
```
