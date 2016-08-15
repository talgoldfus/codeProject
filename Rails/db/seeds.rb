# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Board.destroy_all
Category.destroy_all
Question.destroy_all
User.destroy_all
Player.destroy_all
Option.destroy_all

board = Board.create(topic: 'math')
board2= Board.create(topic: 'science')
board3 = Board.create(topic: 'history')
board4 = Board.create(topic: 'political science')
board5 = Board.create(topic: 'philosophy')
board6 = Board.create(topic: 'redux')

category = Category.create(board_id: board.id, name: 'num 1')
category2= Category.create(board_id: board.id, name: 'num 2')
category3 = Category.create(board_id: board.id, name: 'num 3')
category4 = Category.create(board_id: board.id, name: 'num 4')
category5 = Category.create(board_id: board.id, name: 'num 5')

question = Question.create(category_id: category.id, difficulty: '200', content: 'what is 5+5?')
question3 = Question.create(category_id: category.id, difficulty: '400', content: 'what is 5+1?')
question4 = Question.create(category_id: category.id, difficulty: '600', content: 'what is 5+3?')
question5 = Question.create(category_id: category.id, difficulty: '800', content: 'what is 5+4?')
question6 = Question.create(category_id: category.id, difficulty: '1000', content: 'what is 5+6?')

question8 = Question.create(category_id: category2.id, difficulty: '200', content: 'what is 5+2?')
question9 = Question.create(category_id: category2.id, difficulty: '400', content: 'what is 5+1?')
question10 = Question.create(category_id: category2.id, difficulty: '600', content: 'what is 5+3?')
question11 = Question.create(category_id: category2.id, difficulty: '800', content: 'what is 5+4?')
question12 = Question.create(category_id: category2.id, difficulty: '1000', content: 'what is 5+6?')

question14 = Question.create(category_id: category3.id, difficulty: '200', content: 'what is 5+2?')
question15 = Question.create(category_id: category3.id, difficulty: '400', content: 'what is 5+1?')
question16 = Question.create(category_id: category3.id, difficulty: '600', content: 'what is 5+3?')
question17 = Question.create(category_id: category3.id, difficulty: '800', content: 'what is 5+4?')
question18 = Question.create(category_id: category3.id, difficulty: '1000', content: 'what is 5+6?')

question20 = Question.create(category_id: category4.id, difficulty: '200', content: 'what is 5+2?')
question21 = Question.create(category_id: category4.id, difficulty: '400', content: 'what is 5+1?')
question22 = Question.create(category_id: category4.id, difficulty: '600', content: 'what is 5+3?')
question23 = Question.create(category_id: category4.id, difficulty: '800', content: 'what is 5+4?')
question24 = Question.create(category_id: category4.id, difficulty: '1000', content: 'what is 5+6?')


question26 = Question.create(category_id: category5.id, difficulty: '200', content: 'what is 5+2?')
question27 = Question.create(category_id: category5.id, difficulty: '400', content: 'what is 5+1?')
question28 = Question.create(category_id: category5.id, difficulty: '600', content: 'what is 5+3?')
question29 = Question.create(category_id: category5.id, difficulty: '800', content: 'what is 5+4?')
question30 = Question.create(category_id: category5.id, difficulty: '1000', content: 'what is 5+6?')

user = User.create(first_name: 'flat', last_name: 'iron', hometown: 'philly', password_digest: 'flatiron', tagline: 'working')

player = Player.create(board_id: board, user_id: user.id, points: 100)

option1 = Option.create(question_id: question.id, correct: false, content: 5)
option2 = Option.create(question_id: question.id, correct: false, content: 7)
option3 = Option.create(question_id: question.id, correct: false, content: 6)
option4 = Option.create(question_id: question.id, correct: true, content: 10)
