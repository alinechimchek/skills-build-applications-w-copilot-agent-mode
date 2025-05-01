from rest_framework import serializers

class UserSerializer(serializers.Serializer):
    _id = serializers.CharField(read_only=True)
    username = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    password = serializers.CharField(max_length=100)

class TeamSerializer(serializers.Serializer):
    _id = serializers.CharField(read_only=True)
    name = serializers.CharField(max_length=100)
    members = serializers.ListField(child=serializers.CharField())

class ActivitySerializer(serializers.Serializer):
    _id = serializers.CharField(read_only=True)
    user = serializers.CharField()
    activity_type = serializers.CharField(max_length=100)
    duration = serializers.CharField()

class LeaderboardSerializer(serializers.Serializer):
    _id = serializers.CharField(read_only=True)
    user = serializers.CharField()
    score = serializers.IntegerField()

class WorkoutSerializer(serializers.Serializer):
    _id = serializers.CharField(read_only=True)
    name = serializers.CharField(max_length=100)
    description = serializers.CharField()
