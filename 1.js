function MyBio () {
	return {
		"name": "Imanda Fachruddin",
		"address": "Desa Tegalgondo Kec. Wonosari Kab. Klaten",
		"hobbies": ["Reading Book", "Traveling"],
		"is_maried": false,
		"school": {
			"highSchool": "SMA N 3 Klaten",
			"university": "Universitas Negeri Semarang"
		},
		"skills": [
			{
				"name": "Java",
				"score": "78"
			},
			{
				"name": "XML",
				"score": "77"
			},
			{
				"name": "Git",
				"score": "77"
			},
			{
				"name": "Javasript",
				"score": "78"
			},
			{
                "name": "Node.js",
                "score": "70"
            },
            {
                "name": "MySQL",
                "score": "70"
            }
		]
	}
}

let bio = MyBio();
console.log(bio);