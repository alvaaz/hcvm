'use strict'
var __decorate =
  (this && this.__decorate) ||
  function(decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc)
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
    return c > 3 && r && Object.defineProperty(target, key, r), r
  }
var __metadata =
  (this && this.__metadata) ||
  function(k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v)
  }
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function(resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = __importDefault(require('express'))
const body_parser_1 = __importDefault(require('body-parser'))
const express_graphql_1 = __importDefault(require('express-graphql'))
const database_1 = require('./database')
require('reflect-metadata')
const type_graphql_1 = require('type-graphql')
const ProfessionalResolver_1 = require('./resolvers/ProfessionalResolver')
let HelloResolver = class HelloResolver {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  hello() {
    return __awaiter(this, void 0, void 0, function*() {
      return 'hello world'
    })
  }
}
__decorate(
  [
    type_graphql_1.Query(() => String, { name: 'helloWorld' }),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', []),
    __metadata('design:returntype', Promise)
  ],
  HelloResolver.prototype,
  'hello',
  null
)
HelloResolver = __decorate([type_graphql_1.Resolver()], HelloResolver)
// import graphQlSchema from './graphql/schema'
// import graphQlResolvers from './graphql/resolvers'
const main = () =>
  __awaiter(void 0, void 0, void 0, function*() {
    const app = express_1.default()
    app.use(body_parser_1.default.json())
    app.use(
      '/graphql',
      express_graphql_1.default({
        graphiql: true,
        schema: yield type_graphql_1.buildSchema({
          resolvers: [HelloResolver, ProfessionalResolver_1.ProfessionalResolver]
        }),
        context: {
          messageId: 'test'
        }
      })
    )
    database_1.connect()
    app.listen(3000, () => console.log('Server on port 3000'))
  })
main()
//# sourceMappingURL=app.js.map
