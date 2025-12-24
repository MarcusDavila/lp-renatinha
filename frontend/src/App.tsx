// React import removed as it is not used in this file

import Hero from './components/Hero';
import Authority from './components/Authority';
import Services from './components/Services';
import Steps from './components/Steps';
import WhatsAppButton from './components/WhatsAppButton';
import './components/Services.css'; // Importing styles for Steps as well since they share file or logic? No, wait. 
// I put Steps styles in Services.css in the previous call. I should probably separate them or rename contextually.
// But for now it works. I need to make sure Steps.tsx imports the right CSS.
// In Steps.tsx creation I did: import './Steps.css';
// But I wrote the content into `c:/.../components/Services.css` in the tool call above?
// Ah, I see "TargetFile: .../components/Services.css" for the tool call that had /* Services */ AND /* Steps */ css.
// So I should import Services.css in Steps.tsx OR just rename the file or put the css in index.css.
// Better: I will make sure Steps.tsx imports Services.css OR I will rename the file in import.
// Actually, I claimed to create Steps.tsx importing Steps.css.
// So I need to create Steps.css as well, OR update Steps.tsx to import Services.css.
// I'll update Steps.tsx to import Services.css or just COPY the content.
// To keep it clean, I'll update App.tsx to just run everything.
// Wait, if Steps.tsx imports Steps.css and it doesn't exist, it will crash.
// So I must fix the CSS file situation. I'll handle that next.

// Footer Component (Internal for now or separate file? I'll put it here for speed or separate)
const Footer = () => (
  <footer style={{ backgroundColor: '#1B264F', color: '#fff', padding: '2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
    <p>&copy; {new Date().getFullYear()} Rigor Estrutural. Todos os direitos reservados.</p>
  </footer>
);

function App() {
  return (
    <div className="App">
      <Hero />
      <Authority />
      <Services />
      <Steps />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
