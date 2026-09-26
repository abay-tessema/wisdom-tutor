export default function StepPath() {
  return (
    <svg
      viewBox="0 0 420 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-md mx-auto"
      role="img"
      aria-label="A rising staircase connecting Grades 0 to 5, Grades 6 to 8, and Grades 9 to 12, representing a student's progress through school."
    >
      <path
        d="M40 300 L150 300 L150 190 L260 190 L260 80 L380 80"
        stroke="#43594A"
        strokeOpacity="0.55"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1 8"
      />

      <line x1="95" y1="300" x2="95" y2="332" stroke="#E2DDD0" strokeWidth="1.5" />
      <line x1="205" y1="190" x2="205" y2="332" stroke="#E2DDD0" strokeWidth="1.5" />
      <line x1="320" y1="80" x2="320" y2="332" stroke="#E2DDD0" strokeWidth="1.5" />

      <circle cx="95" cy="300" r="7" fill="#FBF9F5" stroke="#16233D" strokeWidth="2.5" />
      <circle cx="205" cy="190" r="7" fill="#FBF9F5" stroke="#16233D" strokeWidth="2.5" />
      <circle cx="320" cy="80" r="8.5" fill="#C6902B" stroke="#16233D" strokeWidth="2.5" />

      <text x="95" y="350" textAnchor="middle" fontSize="13" fill="#5B6B7C" fontFamily="var(--font-sans)">
        Grades 0–5
      </text>
      <text x="205" y="350" textAnchor="middle" fontSize="13" fill="#5B6B7C" fontFamily="var(--font-sans)">
        Grades 6–8
      </text>
      <text x="320" y="350" textAnchor="middle" fontSize="13" fill="#16233D" fontFamily="var(--font-sans)" fontWeight="600">
        Grades 9–12
      </text>
    </svg>
  );
}
