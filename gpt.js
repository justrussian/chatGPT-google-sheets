function chatGPT(prompt) {
  const openaiApiKey = 'здесь ключ';
  const apiUrl = "https://api.openai.com/v1/chat/completions";

  const headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + openaiApiKey
  };

  const payload = {
    "model": "gpt-3.5-turbo",
    "messages": [
      {
        "role": "user",
        "content": prompt
      }
    ]
  };

  const options = {
    "method": "POST",
    "headers": headers,
    "payload": JSON.stringify(payload)
  };

  const response = UrlFetchApp.fetch(apiUrl, options);
  const json = JSON.parse(response.getContentText());

  if (json.choices && json.choices[0] && json.choices[0].message) {
    return json.choices[0].message.content;
  } else {
    return "Произошла ошибка, попробуйте еще раз.";
  }
}