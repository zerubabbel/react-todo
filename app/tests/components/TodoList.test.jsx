var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });
  it('should render one Todo component for each todo item', () => {
    var todos = [{
      id: 1,
      text: 'do something'
    },{
      id: 2,
      text: 'do something else'
    }];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var todosComponent = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    expect(todosComponent.length).toBe(todos.length);
  });

});
