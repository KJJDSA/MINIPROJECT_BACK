require('dotenv').config();
const port = process.env.EXPRESS_PORT;
module.exports = {
  "swagger": "2.0",
  "info": {
    "version": "1.0.0",
    "title": "4조 MINI SWAGGER~",
    "description": "Estagram & blind 게시판을 만드는 4조의 스웨거입니당"
  },
  "host": `localhost: ${port}`,
  "basePath": "/",
  "tags": [
    {
      "name": "User",
      "description": "Endpoints"
    }
  ],
  "schemes": [
    "http"
  ],
  "securityDefinitions": {
    "apiKeyAuth": {
      "type": "apiKey",
      "in": "cookie",
      "name": "HangHae99",
      "description": "any description..."
    }
  },
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json"
  ],
  "paths": {
    "/authMiddlewareTest": {
      "post": {
        "description": "회원가입과 토큰발급이 필요해 만든 한 임시 API입니다.",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "loginId": {
                  "example": "아이디 쓰세용"
                },
                "nickname": {
                  "example": "닉네임 쓰세용"
                },
                "password": {
                  "example": "비밀번호 쓰세용"
                }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "403": {
            "description": "Forbidden"
          }
        }
      }
    },
    "/postMaker": {
      "post": {
        "description": "comment 기능을 위해서 임시로 만든 API입니다.",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "title": {
                  "example": "제목 쓰세용"
                },
                "content": {
                  "example": "내용 쓰세용"
                }
              }
            }
          }
        ],
        "responses": {
          "201": {
            "description": "OK"
          },
          "403": {
            "description": "Forbidden"
          }
        }
      }
    },
    "/api/comments/{postId}": {
      "get": {
        "description": "postId를 입력하면 해당 post의 댓글을 확인할 수 있습니다.",
        "parameters": [
          {
            "name": "postId",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "Ok"
          }
        }
      },
      "post": {
        "description": "해당 postId에 댓글을 생성할 수 있는 API입니다. 로그인이 필요합니다.",
        "parameters": [
          {
            "name": "postId",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "comment": {
                  "example": "여기에 댓글 쓰세용"
                }
              }
            }
          }
        ],
        "responses": {
          "201": {
            "description": "create"
          },
          "404": {
            "description": "Not Found"
          }
        }
      }
    },
    "/api/comments/{commentId}": {
      "put": {
        "description": "comment의 고유 Id를 입력하면 수정이 가능합니다. 로그인이 필요합니다.",
        "parameters": [
          {
            "name": "commentId",
            "in": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "comment": {
                  "example": "수정할 댓글을 쓰세용"
                }
              }
            }
          }
        ],
        "responses": {
          "404": {
            "description": "Not Found"
          },
          "204": {
            "description": "No Content"
          }
        }
      },
      "delete": {
        "description": "comment의 고유 Id를 입력하면 삭제가 가능합니다. 로그인이 필요합니다.",
        "parameters": [
          {
            "name": "commentId",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "403": {
            "description": "Forbidden"
          }
        }
      }
    }
  },
  "definitions": {
    "signup": {
      "type": "object",
      "properties": {
        "father": {
          "type": "string",
          "example": "Simon Doe"
        },
        "mother": {
          "type": "string",
          "example": "Marie Doe"
        }
      }
    },
    "User": {
      "type": "object",
      "properties": {
        "userId": {
          "type": "number",
          "example": 1
        },
        "nickname": {
          "type": "string",
          "example": "aaa"
        },
        "password": {
          "type": "string",
          "example": "1111"
        }
      },
      "required": [
        "nickname",
        "password"
      ]
    },
    "AddUser": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "example": "Jhon Doe"
        },
        "age": {
          "type": "number",
          "example": 29
        },
        "about": {
          "type": "string",
          "example": ""
        }
      },
      "required": [
        "name",
        "age"
      ]
    }
  }
}