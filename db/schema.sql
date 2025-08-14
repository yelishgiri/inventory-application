CREATE TABLE Categories (
category_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
category_name VARCHAR (255) UNIQUE NOT NULL,
category_description VARCHAR (500),
category_image_url TEXT,
category_created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


CREATE TABLE Products (
product_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
product_name VARCHAR (255) UNIQUE NOT NULL,
product_description VARCHAR (500),
product_image_url TEXT,
product_created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
category_id INTEGER REFERENCES Categories(category_id) ON DELETE CASCADE
);

INSERT INTO Categories (category_name, category_description, category_image_url) VALUES
('Outdoor Recreation', 'Gear and items for outdoor activities', 'https://i.imgur.com/oNvkClK.jpg'),
('Electronics', 'Devices and gadgets', 'https://i.imgur.com/MoYhIkv.jpg'),
('Tools', 'Equipment and tools for various tasks', 'https://i.imgur.com/Amf0Ay0.jpg'),
('Party Supplies', 'Items for parties and events', 'https://i.imgur.com/Ej581gg.jpg');



INSERT INTO Products (product_name, product_description, product_image_url, category_id) VALUES
('Kayak', 'A sturdy, single-seater kayak perfect for a day on the lake or river. Includes paddle and safety gear.', 'https://i.imgur.com/UlCeLUS.png', (SELECT category_id FROM Categories WHERE category_name='Outdoor Recreation')),
('Camping Tent', 'Spacious 4-person tent, perfect for weekend getaways and outdoor adventures.', 'https://i.imgur.com/74iyZOD.png', (SELECT category_id FROM Categories WHERE category_name='Outdoor Recreation')),
('Inflatable Paddle Board', 'Portable inflatable paddle board, ideal for lake or ocean use.', 'https://i.imgur.com/xLxGJjq.png', (SELECT category_id FROM Categories WHERE category_name='Outdoor Recreation')),
('Portable BBQ Grill', 'Compact BBQ grill, perfect for tailgating and picnics.', 'https://i.imgur.com/4iiSlFK.png', (SELECT category_id FROM Categories WHERE category_name='Outdoor Recreation')),
('Fishing Rod', 'Lightweight fishing rod ideal for lake and river fishing trips.', 'https://i.imgur.com/hkyp0gw.png', (SELECT category_id FROM Categories WHERE category_name='Outdoor Recreation')),
('Metal Detector', 'Lightweight metal detector for treasure hunting and exploring.', 'https://i.imgur.com/TE90Rl4.png', (SELECT category_id FROM Categories WHERE category_name='Outdoor Recreation')),
('Large Cooler', 'Heavy-duty cooler for keeping food and drinks cold.', 'https://i.imgur.com/w21I6nW.jpeg', (SELECT category_id FROM Categories WHERE category_name='Outdoor Recreation')),
('Camping Chair', 'Foldable camping chair, lightweight and easy to carry.', 'https://i.imgur.com/ZAsuvhk.png', (SELECT category_id FROM Categories WHERE category_name='Outdoor Recreation')),
('Pop-Up Gazebo', 'Easy-to-set-up gazebo for shade at outdoor gatherings.', 'https://i.imgur.com/2m01hyQ.jpeg', (SELECT category_id FROM Categories WHERE category_name='Outdoor Recreation')),
('Basketball Hoop', 'Portable basketball hoop for backyard play.', 'https://i.imgur.com/uwDvCfo.jpeg', (SELECT category_id FROM Categories WHERE category_name='Outdoor Recreation')),
('Portable Fire Pit', 'Portable fire pit, ideal for backyard or camping use.', 'https://i.imgur.com/kal0h4p.png', (SELECT category_id FROM Categories WHERE category_name='Outdoor Recreation')),
('Projector', 'High-resolution projector ideal for movie nights, presentations, or gaming sessions.', 'https://i.imgur.com/RKtwR2s.jpeg', (SELECT category_id FROM Categories WHERE category_name='Electronics')),
('GoPro Camera', 'High-definition action camera for capturing outdoor adventures.', 'https://i.imgur.com/Xs89OeV.png', (SELECT category_id FROM Categories WHERE category_name='Electronics')),
('Portable Speaker', 'Loud and portable Bluetooth speaker for outdoor events.', 'https://i.imgur.com/mfYEJWW.png', (SELECT category_id FROM Categories WHERE category_name='Electronics')),
('Drone', 'Compact drone with HD camera for capturing aerial footage.', 'https://i.imgur.com/iZLJ5vq.png', (SELECT category_id FROM Categories WHERE category_name='Electronics')),
('Projector Screen', 'Large foldable screen for outdoor or indoor projection.', 'https://i.imgur.com/YlJuqKa.jpeg', (SELECT category_id FROM Categories WHERE category_name='Electronics')),
('Electric Drill', 'Cordless electric drill with adjustable settings, ideal for home repairs and DIY projects.', 'https://i.imgur.com/P3YZgyq.jpeg', (SELECT category_id FROM Categories WHERE category_name='Tools')),
('Power Generator', 'Portable power generator, perfect for camping or as an emergency backup.', 'https://i.imgur.com/DJ4whFw.png', (SELECT category_id FROM Categories WHERE category_name='Tools')),
('Chainsaw', 'Powerful chainsaw for cutting wood and outdoor maintenance.', 'https://i.imgur.com/vdIYaUW.png', (SELECT category_id FROM Categories WHERE category_name='Tools')),
('Portable Generator', 'Compact generator ideal for outdoor events or emergencies.', 'https://i.imgur.com/OAeOYfk.jpeg', (SELECT category_id FROM Categories WHERE category_name='Tools')),
('Electric Saw', 'Electric saw, ideal for woodcutting and DIY projects.', 'https://i.imgur.com/c4NyNQD.png', (SELECT category_id FROM Categories WHERE category_name='Tools')),
('Sandblaster', 'Handheld sandblaster for heavy-duty cleaning projects.', 'https://i.imgur.com/i0T6SzB.jpeg', (SELECT category_id FROM Categories WHERE category_name='Tools')),
('Water Pump', 'Portable water pump for draining pools or flooded areas.', 'https://i.imgur.com/YgTJxW9.png', (SELECT category_id FROM Categories WHERE category_name='Tools')),
('Bounce House', 'Inflatable bounce house for parties, safe and fun for kids.', 'https://i.imgur.com/5c8IbWm.png', (SELECT category_id FROM Categories WHERE category_name='Party Supplies')),
('Popcorn Machine', 'Commercial-grade popcorn machine, great for parties and events.', 'https://i.imgur.com/vCpId1o.png', (SELECT category_id FROM Categories WHERE category_name='Party Supplies')),
('Hot Tub', 'Portable inflatable hot tub for relaxation and parties.', 'https://i.imgur.com/N8Y5ydu.png', (SELECT category_id FROM Categories WHERE category_name='Party Supplies')),
('Slush Machine', 'Slushie machine, perfect for adding fun to parties and events.', 'https://i.imgur.com/sn9Ibds.png', (SELECT category_id FROM Categories WHERE category_name='Party Supplies')),
('Party Lighting', 'Colorful lighting set to enhance the vibe of any party.', 'https://i.imgur.com/uaRyE2L.jpeg', (SELECT category_id FROM Categories WHERE category_name='Party Supplies')),
('Fog Machine', 'Fog machine to add atmosphere to parties and events.', 'https://i.imgur.com/Cf7LGi7.jpeg', (SELECT category_id FROM Categories WHERE category_name='Party Supplies'));
