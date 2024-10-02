import AWS from 'aws-sdk';
const ses = new AWS.SES({ region: 'eu-west-1' });

export const handler = async (event) => {
    const { email, firstname, lastname, body } = JSON.parse(event.body);

    const params = {
        Destination: {
            ToAddresses: ['cyril_de_lajudie@hotmail.fr'],
        },
        Message: {
            Body: {
                Text: {
                    Data: `Email: ${email}\nMessage: ${body}`,
                },
            },
            Subject: { Data: `New Contact Form Submission from ${firstname} ${lastname}` },
        },
        Source: 'contact@therealcyril.dev',
    };

    try {
        await ses.sendEmail(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully!' }),
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to send email.' }),
        };
    }
};