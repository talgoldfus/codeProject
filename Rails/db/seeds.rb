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
Game.destroy_all
Option.destroy_all

board = Board.create(topic: 'ruby')
board2= Board.create(topic: 'sql')
board3 = Board.create(topic: 'javascript')
board4 = Board.create(topic: 'html')
board5 = Board.create(topic: 'css')
board6 = Board.create(topic: 'react')

category = Category.create(board_id: board.id, name: 'Simple Expressions')
category2= Category.create(board_id: board.id, name: 'Loops & Conditionals')
category3 = Category.create(board_id: board.id, name: ' Methods & Hashes')
category4 = Category.create(board_id: board.id, name: 'Ruby Questions')
category5 = Category.create(board_id: board.id, name: 'Object Oriented Programming')

question = Question.create(category_id: category.id, difficulty: '200', content: 'What does the following expression evaluate to?
                                                                                  2 ** 3')
question3 = Question.create(category_id: category.id, difficulty: '400', content: 'What does the following code return?
                                                                                  def add(x, y)
                                                                                    return(x + y)
                                                                                  end
                                                                                  add(3, 5)')
question4 = Question.create(category_id: category.id, difficulty: '600', content: 'What are the values of a, b, c and d?
                                                                                  a, (b, *c), d = 1, [2, 3, 4], 5')
question5 = Question.create(category_id: category.id, difficulty: '800', content: 'What does the following code print?

                                                                                  def first_name()
                                                                                    return("Otto")
                                                                                  end

                                                                                  def last_name()
                                                                                    return("Mation")
                                                                                  end

                                                                                  def full_name()
                                                                                    first_name() + " " + last_name()
                                                                                  end

                                                                                  puts full_name()')
question6 = Question.create(category_id: category.id, difficulty: '1000', content: 'What does the following code print?
                                                                                    class IceCream
                                                                                      @temp = "cold"
                                                                                    end
                                                                                    print IceCream.instance_variables')

question8 = Question.create(category_id: category2.id, difficulty: '200', content: 'What does the following code print?
                                                                                    puts "unicorn".reverse()')
question9 = Question.create(category_id: category2.id, difficulty: '400', content: 'arr = ["onyx", "wu tang", "biggie", "tupac"]
                                                                                    Get the "biggie" string from arr.')
question10 = Question.create(category_id: category2.id, difficulty: '600', content: 'colors = ["red", "violet", "blue"]
                                                                                    Use the colors array to construct the following array:
                                                                                    [["red", 1], ["violet", 2], ["blue", 3]]')
question11 = Question.create(category_id: category2.id, difficulty: '800', content: 'days = ["mon", "tues", "wed", "thur", "fri"]
                                                                                    Create an array of the elements with indexes 0 and 2. The return value should be ["mon", "wed"].')
question12 = Question.create(category_id: category2.id, difficulty: '1000', content: 'What  does the following print
                                                                                    enum = ("begin"..."finish").to_enum
                                                                                    print enum.next
                                                                                    print enum.next
                                                                                    print enum.next')

question14 = Question.create(category_id: category3.id, difficulty: '200', content: 'lebron = {:sport=>"basketball", :birthplace=>"Akron", :high_school=>"St. Vincent-St. Mary High School"}
                                                                                    Return an array of all the keys in the lebron hash.')
question15 = Question.create(category_id: category3.id, difficulty: '400', content: 'lebron = {:sport => "basketball", :birthplace => "Akron"}
                                                                                      Add the :high_school key to the lebron hash with the value "St. Vincent-St. Mary High School".')
question16 = Question.create(category_id: category3.id, difficulty: '600', content: 'What does the following code return?
                                                                                    browsers = {
                                                                                      :favorite => :chrome,
                                                                                      :favorite => :firefox,
                                                                                      :worst => :internet_explorer
                                                                                    }
                                                                                    browsers[:favorite]')
question17 = Question.create(category_id: category3.id, difficulty: '800', content: 'dude = {
                                                                                      age: 44,
                                                                                      weight: 250,
                                                                                      net_worth: 25
                                                                                    }
                                                                                    Return the product of all the values in the dude hash (the result should be 44 * 250 * 25 = 275_000).')
question18 = Question.create(category_id: category3.id, difficulty: '1000', content: 'What does the following code print? Explain.
                                                                                    h = {}
                                                                                    class Sublime
                                                                                      @fav = "caress me down"
                                                                                      def sing(obj)
                                                                                        obj.instance_variable_set(:@greeting, "mucho gusto")
                                                                                        obj.instance_variable_set(:@name, "me llamo brad lee")
                                                                                      end
                                                                                    end

                                                                                    s = Sublime.new
                                                                                    s.sing(h)
                                                                                    p s.instance_variables
                                                                                    p "***"
                                                                                    p h.instance_variables')

question20 = Question.create(category_id: category4.id, difficulty: '200', content: 'What are the values of a, b, c and d?
                                                                                    a, (b, *c), d = 1, [2, 3, 4], 5')
question21 = Question.create(category_id: category4.id, difficulty: '400', content: 'Variables that start with a capital letter are what kind of variables in Ruby?')
question22 = Question.create(category_id: category4.id, difficulty: '600', content: 'What does the following print? print 10.step(100, 20).to_a')
question23 = Question.create(category_id: category4.id, difficulty: '800', content: 'what does the following print
                                                                                      thang = "biscuits"
                                                                                      [1,2,3].each { |n; thang| thang = n }
                                                                                      puts thang')
question24 = Question.create(category_id: category4.id, difficulty: '1000', content: 'What happens when the following is run?
                                                                                      Proc.new { |i,j| }.call(1,2,3)')


question26 = Question.create(category_id: category5.id, difficulty: '200', content: 'Create a Celsius class that is initialized with temperature.')
question27 = Question.create(category_id: category5.id, difficulty: '400', content: 'Define a Calculator class with an add() class method.')
question28 = Question.create(category_id: category5.id, difficulty: '600', content: 'Refactor the following class to remove the argument-order dependency.
                                                                                     class Person
                                                                                       def initialize(name, age)
                                                                                         @name = name
                                                                                         @age = age
                                                                                       end
                                                                                     end

                                                                                     class Yankees
                                                                                       def captain
                                                                                         Person.new("Jeter", 39)
                                                                                       end
                                                                                     end')
question29 = Question.create(category_id: category5.id, difficulty: '800', content: 'What does the following code print?
                                                                                      x = 42
                                                                                      y = "cat"
                                                                                      b = binding
                                                                                      def hi(b)
                                                                                        b.local_variable_get(:y)
                                                                                      end
                                                                                      p hi(b)')
question30 = Question.create(category_id: category5.id, difficulty: '1000', content: 'What does the following code print? Explain.
                                                                                      class Pig
                                                                                        protected
                                                                                        def sound
                                                                                          "oink!"
                                                                                        end
                                                                                      end

                                                                                      piggy = Pig.new
                                                                                      p piggy.sound')

user = User.create(first_name: 'flat', last_name: 'iron', hometown: 'philly', password_digest: 'flatiron', tagline: 'working')

game = Game.create(board_id: board.id, user_id: user.id, final_score: 1000)

#What does the following expression evaluate to? 2 ** 3
option1 = Option.create(question_id: question.id, correct: false, content: 6)
option2 = Option.create(question_id: question.id, correct: true, content: 8)
option3 = Option.create(question_id: question.id, correct: false, content: 12)
option4 = Option.create(question_id: question.id, correct: false, content: "error")

#What does the following code return?
#   def add(x, y)
#     return(x + y)
#   end
#   add(3, 5)
option5 = Option.create(question_id: question3.id, correct: false, content: "error")
option6 = Option.create(question_id: question3.id, correct: true, content: "xy")
option7 = Option.create(question_id: question3.id, correct: false, content: "[3, 5]")
option8 = Option.create(question_id: question3.id, correct: false, content: "8")

#What are the values of a, b, c and d? a, (b, *c), d = 1, [2, 3, 4], 5
option9 = Option.create(question_id: question4.id, correct: true, content: "a = 1
                                                                            b = 2
                                                                            c = nil
                                                                            d = 3")
option10 = Option.create(question_id: question4.id, correct: false, content: "a = 1
                                                                            b = 2
                                                                            c = 3
                                                                            d = 4")
option11 = Option.create(question_id: question4.id, correct: false, content: "a = 1
                                                                            b = nil
                                                                            c = 3
                                                                            d = 4")
option12 = Option.create(question_id: question4.id, correct: false, content: "a = 1
                                                                            b = 2
                                                                            c = nil
                                                                            d = 4")



#What does the following code print?
# def first_name()
  # return("Otto")
# end

# def last_name()
  # return("Mation")
# end

# def full_name()
  # first_name() + " " + last_name()
# end

# puts full_name()
option17 = Option.create(question_id: question5.id, correct: true, content: "Otto Mation")
option18 = Option.create(question_id: question5.id, correct: false, content: "OttoMation")
option19 = Option.create(question_id: question5.id, correct: false, content: "error")
option20 = Option.create(question_id: question5.id, correct: false, content: "Otto + Mation")

# What does the following code print?
# class IceCream
  # @temp = "cold"
# end
# print IceCream.instance_variables
option17 = Option.create(question_id: question6.id, correct: false, content: '["temp"]')
option18 = Option.create(question_id: question6.id, correct: false, content: "temp")
option19 = Option.create(question_id: question6.id, correct: false, content: "@temp]")
option20 = Option.create(question_id: question6.id, correct: true, content: "[:@temp]")

# What does the following code print?
# puts "unicorn".reverse()
option21 = Option.create(question_id: question8.id, correct: false, content: 'unicorn')
option22 = Option.create(question_id: question8.id, correct: true, content: "nrocinu")
option23 = Option.create(question_id: question8.id, correct: false, content: "nrocinU")
option24 = Option.create(question_id: question8.id, correct: false, content: "Nrocinu")

# arr = ["onyx", "wu tang", "biggie", "tupac"]
# Get the "biggie" string from arr.
option25 = Option.create(question_id: question9.id, correct: false, content: 'arr[-1]')
option26 = Option.create(question_id: question9.id, correct: true, content: "arr[2]")
option27 = Option.create(question_id: question9.id, correct: false, content: "arr[3]")
option28 = Option.create(question_id: question9.id, correct: false, content: 'arr["biggie"]')

# colors = ['red', 'violet', 'blue']
# Use the colors array to construct the following array:

# [['red', 1], ['violet', 2], ['blue', 3]]
option29 = Option.create(question_id: question10.id, correct: false, content: 'result = []
                                                                              colors.each_with_index do |color, index|
                                                                                result << ["color", "index"  + 1]
                                                                              end')
option30 = Option.create(question_id: question10.id, correct: false, content: "colors.map.with_index do |color, index|
                                                                                [color, index] + 1
                                                                              end")
option31 = Option.create(question_id: question10.id, correct: false, content: 'result = []
                                                                              colors.each do |color, index|
                                                                                result << [color, index  + 1]
                                                                              end')
option32 = Option.create(question_id: question10.id, correct: true, content: 'colors.map.with_index do |color, index|
                                                                                [color, index + 1]
                                                                              end')

# days = ["mon", "tues", "wed", "thur", "fri"]
# Create an array of the elements with indexes 0 and 2. The return value should be ["mon", "wed"].
#
option33 = Option.create(question_id: question11.id, correct: false, content: "days.values_at(0, 3)")
option34 = Option.create(question_id: question11.id, correct: true, content: "days.select.with_index do |_, index|
                                                                                [0, 2].include? index
                                                                              end")
option35 = Option.create(question_id: question11.id, correct: false, content: "days.select.each_with_index do |_, index|
                                                                                  [0, 2].include? index
                                                                                end")
option36 = Option.create(question_id: question11.id, correct: false, content: "days.values(0, 2)")

# What  does the following print
# enum = ("begin"..."finish").to_enum
# print enum.next
# print enum.next
# print enum.next

option37 = Option.create(question_id: question12.id, correct: false, content: "begin
                                                                              begin
                                                                              begin")
option38 = Option.create(question_id: question12.id, correct: false, content: "begio
                                                                              begip
                                                                              begiq")
option39 = Option.create(question_id: question12.id, correct: false, content: "error")
option40 = Option.create(question_id: question12.id, correct: true, content: "begin
                                                                              begio
                                                                              begip")


#lebron = {:sport=>"basketball", :birthplace=>"Akron", :high_school=>"St. Vincent-St. Mary High School"}
# Return an array of all the keys in the lebron hash.
option41 = Option.create(question_id: question14.id, correct: false, content: "lebron.keys")
option42 = Option.create(question_id: question14.id, correct: false, content: "lebron.values()")
option43 = Option.create(question_id: question14.id, correct: true, content: "lebron.keys()")
option44 = Option.create(question_id: question14.id, correct: false, content: "lebron.keys.all")

#lebron = {:sport => "basketball", :birthplace => "Akron"}
# Add the :high_school key to the lebron hash with the value "St. Vincent-St. Mary High School".
option45 = Option.create(question_id: question15.id, correct: false, content: 'lebron.push({:high_school => "St. Vincent-St. Mary High School"})')
option46 = Option.create(question_id: question15.id, correct: false, content: 'lebron("high_school", "St. Vincent-St. Mary High School")')
option47 = Option.create(question_id: question15.id, correct: false, content: "lebron[:high_school].to_h(St. Vincent-St. Mary High School)")
option48 = Option.create(question_id: question15.id, correct: true, content: 'lebron[:high_school] = "St. Vincent-St. Mary High School"')

#What does the following code return?
# browsers = {
  # :favorite => :chrome,
  # :favorite => :firefox,
  # :worst => :internet_explorer
# }
# browsers[:favorite]
option49 = Option.create(question_id: question16.id, correct: true, content: ":firefox")
option50 = Option.create(question_id: question16.id, correct: false, content: ":chrome")
option51 = Option.create(question_id: question16.id, correct: false, content: "error")
option52 = Option.create(question_id: question16.id, correct: false, content: "[:chrome, :favorite]")

#dude = {
  # age: 44,
  # weight: 250,
  # net_worth: 25
# }
# Return the product of all the values in the dude hash (the result should be 44 * 250 * 25 = 275_000).
option53 = Option.create(question_id: question17.id, correct: false, content: "dude.values.sum(1) do |product, number|
                                                                              product *= number
                                                                              product
                                                                            end")
option54 = Option.create(question_id: question17.id, correct: true, content: "dude.values.inject(1) do |product, number|
                                                                                product *= number
                                                                                product
                                                                              end")
option55 = Option.create(question_id: question17.id, correct: false, content: "dude.values.include do |product, number|
                                                                                product *= number
                                                                                product
                                                                              end")
option56 = Option.create(question_id: question17.id, correct: false, content: "dude.values.inject(1) do |product, number|
                                                                                product * number
                                                                                product
                                                                              end")
# What does the following code print? Explain.

# h = {}
# class Sublime
  # @fav = 'caress me down'
  # def sing(obj)
    # obj.instance_variable_set(:@greeting, 'mucho gusto')
    # obj.instance_variable_set(:@name, 'me llamo brad lee')
  # end
# end

# s = Sublime.new
# s.sing(h)
# p s.instance_variables
# p "***"
# p h.instance_variables
option57 = Option.create(question_id: question18.id, correct: false, content: 'error')
option58 = Option.create(question_id: question18.id, correct: false, content: '[]
                                                                              "***"
                                                                              [@greeting, @name]')
option59 = Option.create(question_id: question18.id, correct: false, content: '[]
                                                                              "***"
                                                                              ["@greeting", "@name"]')
option60 = Option.create(question_id: question18.id, correct: true, content: '[]
                                                                              "***"
                                                                              [:@greeting, :@name]')


#What are the values of a, b, c and d?
# a, (b, *c), d = 1, [2, 3, 4], 5
option61 = Option.create(question_id: question20.id, correct: false, content: "a = 1
                                                                               b = 2
                                                                               c = 3
                                                                               d = 4")
option62 = Option.create(question_id: question20.id, correct: true, content: "a = 1
                                                                               b = 2
                                                                               c = [3, 4]
                                                                               d = 5")
option63 = Option.create(question_id: question20.id, correct: false, content: "a = 1
                                                                               b = 2
                                                                               c = nil
                                                                               d = 3")
option64 = Option.create(question_id: question20.id, correct: false, content: "a = 1
                                                                               b = 2
                                                                               c = [3, 4]
                                                                               d = nil")

#Variables that start with a capital letter are what kind of variables in Ruby?
option13 = Option.create(question_id: question21.id, correct: false, content: "Instance variable")
option14 = Option.create(question_id: question21.id, correct: false, content: "Global variable")
option15 = Option.create(question_id: question21.id, correct: true, content: "Class variable")
option16 = Option.create(question_id: question21.id, correct: false, content: "None of the above")

#What does the following print? print 10.step(100, 20).to_a
option65 = Option.create(question_id: question22.id, correct: true, content: "[10, 30, 50, 70, 90]")
option66 = Option.create(question_id: question22.id, correct: false, content: "[20, 40, 60, 80, 100]")
option67 = Option.create(question_id: question22.id, correct: true, content: "10, 30, 50, 70, 90")
option68 = Option.create(question_id: question22.id, correct: false, content: '["10", "30", "50", "70", "90"]')

#What happens when the following is run?
# lambda { |i,j| }.call(1,2,3)
option69 = Option.create(question_id: question24.id, correct: false, content: "TypeError: no implicit conversion of String into Integer")
option70 = Option.create(question_id: question24.id, correct: false, content: "NameError: undefined local variable or method `lambda' for main:Object")
option71 = Option.create(question_id: question24.id, correct: true, content: "ArgumentError: wrong number of arguments (3 for 2)")
option72 = Option.create(question_id: question24.id, correct: false, content: "ArgumentError: wrong number of arguments (2 for 1)")

#what does the following print
# thang = "biscuits"
# [1,2,3].each { |n; thang| thang = n }
# puts thang
option73 = Option.create(question_id: question23.id, correct: false, content: "biscuits biscuits biscuits")
option74 = Option.create(question_id: question23.id, correct: false, content: "error")
option75 = Option.create(question_id: question23.id, correct: false, content: "thang")
option76 = Option.create(question_id: question23.id, correct: true, content: "biscuits")

#What happens when the following is run?
# Proc.new { |i,j| }.call(1,2,3)
# option77 = Option.create(question_id: question26.id, correct: true, content: "nil")
# option78 = Option.create(question_id: question26.id, correct: false, content: "error)")
# option79 = Option.create(question_id: question26.id, correct: false, content: "{}")
# option80 = Option.create(question_id: question26.id, correct: false, content: "[]")

# Create a Celsius class that is initialized with temperature.
option81 = Option.create(question_id: question26.id, correct: false, content: "class Celsius
                                                                                  def initialize(temperature)
                                                                                    temperature
                                                                                  end
                                                                                end")
option82 = Option.create(question_id: question26.id, correct: false, content: "class Celsius
                                                                                def init(temperature)
                                                                                  @temperature = temperature
                                                                                end
                                                                              end")
option83 = Option.create(question_id: question26.id, correct: true, content: "class Celsius
                                                                                def initialize(temperature)
                                                                                  @temperature = temperature
                                                                                end
                                                                              end")
option84 = Option.create(question_id: question26.id, correct: false, content: "class Celsius
                                                                                  def initialize(temperature)
                                                                                    temperature = @temperature
                                                                                  end
                                                                                end")

# Define a Calculator class with an add() class method.
option85 = Option.create(question_id: question27.id, correct: false, content: "class Calculator
                                                                                  def self.add(x, y)
                                                                                    return(x + y)
                                                                                  end
                                                                                end
                                                                                puts Calculator(3, 4)")
option86 = Option.create(question_id: question27.id, correct: false, content: "class Calculator
                                                                                def add(x, y)
                                                                                  x + y
                                                                                end
                                                                              end

                                                                              puts Calculator.add(3, 4)")
option87 = Option.create(question_id: question27.id, correct: false, content: "class Calculator
                                                                                def add(x, y)
                                                                                  return(x + y)
                                                                                end
                                                                              end

                                                                              puts Calculator.add(3, 4)")
option88 = Option.create(question_id: question27.id, correct: true, content: "class Calculator
                                                                                def self.add(x, y)
                                                                                  return(x + y)
                                                                                end
                                                                              end

                                                                              puts Calculator.add(3, 4)")

# Refactor the following class to remove the argument-order dependency.

# class Person
  # def initialize(name, age)
    # @name = name
    # @age = age
  # end
# end

# class Yankees
  # def captain
    # Person.new("Jeter", 39)
  # end
# end
option89 = Option.create(question_id: question28.id, correct: true, content: 'class Person
                                                                                def initialize(args)
                                                                                  @name = args.fetch(:name)
                                                                                  @age = args.fetch(:age)
                                                                                end
                                                                              end

                                                                              class Yankees
                                                                                def captain
                                                                                  Person.new({ name: "Jeter", age: 39 })
                                                                                end
                                                                              end')
option90 = Option.create(question_id: question28.id, correct: false, content: 'class Person
                                                                                def initialize(args)
                                                                                  @name = args(:name)
                                                                                  @age = args(:age)
                                                                                end
                                                                              end

                                                                              class Yankees
                                                                                def captain
                                                                                  Person.new({ name: "Jeter", age: 39 })
                                                                                end
                                                                              end')
option91 = Option.create(question_id: question28.id, correct: false, content: 'class Person
                                                                                def initialize(args)
                                                                                  @name = args.fetch(name)
                                                                                  @age = args.fetch(age)
                                                                                end
                                                                              end

                                                                              class Yankees
                                                                                def captain
                                                                                  Person.new({ name: "Jeter", age: 39 })
                                                                                end
                                                                              end')
option92 = Option.create(question_id: question28.id, correct: false, content: 'class Person
                                                                                  def initialize(args)
                                                                                    @name = args.fetch(:name)
                                                                                    @age = args.fetch(:age)
                                                                                  end
                                                                                end

                                                                                class Yankees
                                                                                  def captain
                                                                                    Person.new("Jeter", 39)
                                                                                  end
                                                                                end')

# What does the following code print?

# x = 42
# y = 'cat'
# b = binding
# def hi(b)
  # b.local_variable_get(:y)
# end
# p hi(b)
option93 = Option.create(question_id: question29.id, correct: false, content: "hi cat")
option94 = Option.create(question_id: question29.id, correct: false, content: "error)")
option95 = Option.create(question_id: question29.id, correct: true, content: "cat")
option96 = Option.create(question_id: question29.id, correct: false, content: "nil")

# What does the following code print?

# class Pig
  # protected
  # def sound
    # 'oink!'
  # end
# end

# piggy = Pig.new
# p piggy.sound
option97 = Option.create(question_id: question30.id, correct: false, content: "nil")
option98 = Option.create(question_id: question30.id, correct: true, content: "error)")
option99 = Option.create(question_id: question30.id, correct: false, content: "oink!")
option100 = Option.create(question_id: question30.id, correct: false, content: "#Pig:0x007ff24ab73d58")
