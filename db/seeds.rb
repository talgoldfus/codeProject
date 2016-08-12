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


board1 = Board.create(topic: 'math')
board2 = Board.create(topic: 'science')
board3 = Board.create(topic: 'english')
board4 = Board.create(topic: 'reading')
board5 = Board.create(topic: 'art')
board6 = Board.create(topic: 'history')

category1 = Category.create(board_id: board1.id, name: 'num 1')
category2 = Category.create(board_id: board2.id, name: 'num 2')
category3 = Category.create(board_id: board3.id, name: 'num 3')
category4 = Category.create(board_id: board4.id, name: 'num 4')
category5 = Category.create(board_id: board5.id, name: 'num 5')
category6 = Category.create(board_id: board6.id, name: 'num 6')

question = Question.create(category_id: category1.id, difficulty: '100', content: 'what is 5+5?')



user = User.create(first_name: 'flat', last_name: 'iron', hometown: 'philly', password_digest: 'flatiron', tagline: 'working')

player = Player.create(board_id: board1.id, user_id: user.id, points: 100)

option1 = Option.create(question_id: question.id, correct: false, content: 5)
option2 = Option.create(question_id: question.id, correct: false, content: 7)
option3 = Option.create(question_id: question.id, correct: false, content: 6)
option4 = Option.create(question_id: question.id, correct: true, content: 10)

