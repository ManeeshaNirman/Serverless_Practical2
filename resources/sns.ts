export default{
    StudentCreate:{
        Type:'AWS::SNS::Topic',
        Properties:{
            TopicName:'codelabs-student-create-${sls:stage}',
        }
    }
} 