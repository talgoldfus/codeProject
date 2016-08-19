
class PopulateBoard

  DIFFICULTY_LEVELS = [200,400,600,800,1000]

  def self.initiate(board_id)
      new_board = Board.find(board_id)      
      self.populate_categories(new_board)
      self.populate_questions(new_board)
      self.hash_me(new_board)
  end


  def self.populate_categories(new_board)

    category_collection = []
    while category_collection.length < 5 do
      random_category = new_board.categories[rand(0..(new_board.categories.length-1))]
      !category_collection.include?(random_category) ? category_collection << random_category : nil
    end
    new_board.categories = category_collection
  end

  def self.populate_questions(board)
    board.categories.each do |category|
        self.questions_selector(category)
    end
  end

  def self.questions_selector(category)

      questions_collection = []
    DIFFICULTY_LEVELS.each do |difficulty_level|
      questions = category.questions.select{|q| q.difficulty == difficulty_level}
      questions_collection << questions[rand(0..questions.length-1)]
    end
    category.questions = questions_collection
    # ruby way = questions = Question.all.select{ |q| q.category_id == category.id}
  end


  def self.hash_me(board)
    new_hash = {data: {topic: board.topic,id: board.id ,categories: []}}
    board.categories.each_with_object(new_hash[:data][:categories]) do |c,array|
       array.push({ c.name.to_sym => c.questions} )
    end
    new_hash
  end



end
