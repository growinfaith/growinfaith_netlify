82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155

              onError={(e) => (e.target.src = "/fallback-image.png")}
            />
          </div>
          <button className="carousel-button right" onClick={nextGif}>❯</button>
        </div>
      </section>

      <section className="plans">
        <h2>Subscription Plans</h2>
        <div className="plan-box">
          <div className="plan">Monthly: ₱49</div>
          <div className="plan">Quarterly: ₱149</div>
          <div className="plan">Annual: ₱499</div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>Email: support@growinfaithapp.com</p>
        <p>Phone: 09687407712</p>
        <p>Follow us on Meta</p>
      </section>

      <footer>
        &copy; 2025 GrowInFaith. All Rights Reserved.
      </footer>

      <style jsx>{`
        .hero {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          text-align: center;
          padding: 5rem 10%;
        }

        .hero-content, .hero-image {
          max-width: 100%;
        }

        .carousel {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          text-align: center;
        }

        .plans, .contact {
          text-align: center;
        }

        footer {
          text-align: center;
          padding: 1rem;
          background: #f1f1f1;
        }

        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            text-align: center;
          }

          .carousel {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
