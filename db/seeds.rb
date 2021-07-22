
Species.destroy_all

Environment.destroy_all

Region.destroy_all

@salt_water = Environment.create!(name: "Salt Water") 
@fresh_water = Environment.create!(name: "Fresh Water") 

@s_america = Region.create!(name: "S America") 
@n_america = Region.create!(name: "N America") 

@rainbow_trout = Species.create!(name: "Ranbow Trout",description: "Method of catch: Worms. Live nymphs and minnows (best used in winter) Kernel corn and colored marshmallows combind with a medium size rod and reel would be the easies way to catch a trouth since they dont  usually grow over 36 inches.", img_url: "https://vtfishandwildlife.com/sites/fishandwildlife/files/images/Fish/Fishing%20Opportunities/Sportfish%20of%20Vermont/Rainbow%20Trout/rainbowtrout.jpg", environment: @fresh_water, region: @n_america)


# @rainbow_trout.region << @s_america 
# @rainbow_trout.environment << @fresh_water


puts "#{Environment.count} Enviroments created"
puts "#{Region.count} Regions created"
puts "#{Species.count} Species created"