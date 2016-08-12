# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


board = Board.create(topic: 'math')

category = Category.create(board_id: board.id, name: 'num 1')

question = Question.create(category_id: category.id, difficulty: '100', content: 'what is 5+5?')



user = User.create(first_name: 'flat', last_name: 'iron', hometown: 'philly', password_digest: 'flatiron', tagline: 'working')

player = Player.create(board_id: board, user_id: user.id, points: 100)

option1 = Option.create(question_id: question.id, correct: false, content: 5)
option2 = Option.create(question_id: question.id, correct: false, content: 7)
option3 = Option.create(question_id: question.id, correct: false, content: 6)
option4 = Option.create(question_id: question.id, correct: true, content: 10)

