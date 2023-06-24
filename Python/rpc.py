from pypresence import Presence
import time

client_id = 'Client-ID'
token = 'Token'

rpc = Presence(client_id)
rpc.connect()

current_activity = 0
activities = [
    {
        'details': 'Activity 1',
        'state': 'State 1',
        'large_image': 'large_image_key_1',
        'large_text': 'Large Image Text 1',
        'small_image': 'small_image_key_1',
        'small_text': 'Small Image Text 1',
        'start': time.time(),
        'buttons': [
            {'label': 'Button 1', 'url': 'https://example.com'},
            {'label': 'Button 2', 'url': 'https://example.com'}
        ]
    },
    {
        'details': 'Activity 2',
        'state': 'State 2',
        'large_image': 'large_image_key_2',
        'large_text': 'Large Image Text 2',
        'small_image': 'small_image_key_2',
        'small_text': 'Small Image Text 2',
        'start': time.time(),
        'buttons': [
            {'label': 'Button 3', 'url': 'https://example.com'},
            {'label': 'Button 4', 'url': 'https://example.com'}
        ]
    }
]

while True:
    activity = activities[current_activity]
    rpc.update(**activity)
    current_activity = (current_activity + 1) % len(activities)
    print("Updated")
    time.sleep(10)
