/* Copyright 2015 Kyle E. Mitchell
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you
 * may not use this file except in compliance with the License. You may
 * obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
 * implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

var has = function (key) {
  return function (argument) {
    return argument.hasOwnProperty(key)
  }
}

var types = ['blank', 'definition', 'reference', 'use']

types.forEach(function (type) {
  exports[type] = has(type)
})

exports.child = has('form')

exports.component = has('repository')

exports.form = has('content')

exports.text = function (argument) {
  return typeof argument === 'string'
}
