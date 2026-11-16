import React from 'react';
import { 
  Users, DollarSign, Activity, Navigation, ArrowRight, ShieldCheck, 
  MapPin, AlertTriangle, TrendingUp, Layers, CheckCircle2, Building 
} from 'lucide-react';

export default function ProjectMockup({ type, colorAccent = '#06b6d4' }) {
  if (type === 'mukolend') {
    return (
      <div 
        style={{
          width: '100%',
          height: '240px',
          background: 'linear-gradient(145deg, #0b1329 0%, #06101e 100%)',
          borderRadius: '0.75rem',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '1px solid rgba(6, 182, 212, 0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}
        aria-label="MukoLend App UI Preview"
      >
        {/* Mock Top bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'linear-gradient(135deg, #06b6d4, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Users size={14} color="#fff" />
            </div>
            <span style={{ fontWeight: '700', fontSize: '0.85rem', color: '#f8fafc', letterSpacing: '-0.01em' }}>
              MukoLend <span style={{ fontSize: '0.65rem', color: '#38bdf8', fontWeight: '500' }}>ZW</span>
            </span>
          </div>
          <span className="badge badge-cyan" style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem' }}>
            Simulated Sandbox
          </span>
        </div>

        {/* Dashboard Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0.75rem', margin: '0.5rem 0' }}>
          {/* Group Pool Card */}
          <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(6, 182, 212, 0.15)', borderRadius: '0.5rem', padding: '0.65rem' }}>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8', display: 'flex', justifyContent: 'space-between' }}>
              <span>Mukando Group Pool</span>
              <span style={{ color: '#10b981' }}>Active</span>
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: '700', color: '#ffffff', margin: '0.2rem 0' }}>
              $1,850.00 <span style={{ fontSize: '0.65rem', color: '#94a3b8' }}>USD (Sim.)</span>
            </div>
            <div style={{ display: 'flex', gap: '0.35rem', marginTop: '0.35rem' }}>
              <span className="badge badge-emerald" style={{ fontSize: '0.6rem', padding: '0.15rem 0.35rem' }}>12 Members</span>
              <span className="badge badge-cyan" style={{ fontSize: '0.6rem', padding: '0.15rem 0.35rem' }}>Round 4/12</span>
            </div>
          </div>

          {/* Pending Loan Request */}
          <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(59, 130, 246, 0.15)', borderRadius: '0.5rem', padding: '0.65rem' }}>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Next Disbursement</div>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#38bdf8', marginTop: '0.2rem' }}>
              Loan Request #108
            </div>
            <div style={{ fontSize: '0.7rem', color: '#cbd5e1', marginTop: '0.15rem' }}>
              $150.00 • 3/4 Approvals
            </div>
            <div style={{ width: '100%', height: '4px', background: '#334155', borderRadius: '2px', marginTop: '0.4rem', overflow: 'hidden' }}>
              <div style={{ width: '75%', height: '100%', background: '#3b82f6' }}></div>
            </div>
          </div>
        </div>

        {/* Ledger Bottom Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(2, 6, 23, 0.5)', padding: '0.4rem 0.65rem', borderRadius: '0.375rem', fontSize: '0.7rem', color: '#94a3b8' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <ShieldCheck size={13} color="#10b981" />
            <span>Audit Ledger: Verified Hash</span>
          </div>
          <span style={{ color: '#38bdf8', fontFamily: 'var(--font-mono)', fontSize: '0.65rem' }}>
            P2P-LEDGER-OK
          </span>
        </div>
      </div>
    );
  }

  if (type === 'bstms') {
    return (
      <div 
        style={{
          width: '100%',
          height: '240px',
          background: 'linear-gradient(145deg, #0b1329 0%, #06101e 100%)',
          borderRadius: '0.75rem',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}
        aria-label="Bulawayo Smart Traffic System Dashboard Preview"
      >
        {/* Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Activity size={14} color="#fff" />
            </div>
            <span style={{ fontWeight: '700', fontSize: '0.85rem', color: '#f8fafc' }}>
              BSTMS <span style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: '400' }}>| Bulawayo Live</span>
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span className="status-dot"></span>
            <span style={{ fontSize: '0.65rem', color: '#10b981' }}>Telemetry Simulated</span>
          </div>
        </div>

        {/* 4 Roads Monitoring Matrix */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', margin: '0.4rem 0' }}>
          <div style={{ background: 'rgba(15, 23, 42, 0.85)', padding: '0.45rem 0.6rem', borderRadius: '0.375rem', borderLeft: '3px solid #f59e0b' }}>
            <div style={{ fontSize: '0.65rem', color: '#cbd5e1', fontWeight: '600' }}>JMN Nkomo St</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.2rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#f59e0b' }}>Moderate</span>
              <span style={{ fontSize: '0.65rem', color: '#94a3b8' }}>28 km/h</span>
            </div>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.85)', padding: '0.45rem 0.6rem', borderRadius: '0.375rem', borderLeft: '3px solid #10b981' }}>
            <div style={{ fontSize: '0.65rem', color: '#cbd5e1', fontWeight: '600' }}>Khami Road</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.2rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#10b981' }}>Fluid Flow</span>
              <span style={{ fontSize: '0.65rem', color: '#94a3b8' }}>54 km/h</span>
            </div>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.85)', padding: '0.45rem 0.6rem', borderRadius: '0.375rem', borderLeft: '3px solid #ef4444' }}>
            <div style={{ fontSize: '0.65rem', color: '#cbd5e1', fontWeight: '600' }}>Plumtree Road</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.2rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#ef4444' }}>Heavy Bottleneck</span>
              <span style={{ fontSize: '0.65rem', color: '#94a3b8' }}>14 km/h</span>
            </div>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.85)', padding: '0.45rem 0.6rem', borderRadius: '0.375rem', borderLeft: '3px solid #10b981' }}>
            <div style={{ fontSize: '0.65rem', color: '#cbd5e1', fontWeight: '600' }}>Luveve Road</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.2rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#10b981' }}>Clear Route</span>
              <span style={{ fontSize: '0.65rem', color: '#94a3b8' }}>48 km/h</span>
            </div>
          </div>
        </div>

        {/* Alert Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(239, 68, 68, 0.12)', border: '1px solid rgba(239, 68, 68, 0.25)', borderRadius: '0.375rem', padding: '0.35rem 0.6rem', fontSize: '0.65rem', color: '#fca5a5' }}>
          <AlertTriangle size={13} color="#ef4444" />
          <span>Advisory: Divert outbound logistics via Khami Rd to avoid Plumtree Rd delays.</span>
        </div>
      </div>
    );
  }

  if (type === 'logistics') {
    return (
      <div 
        style={{
          width: '100%',
          height: '240px',
          background: 'linear-gradient(145deg, #0b1329 0%, #06101e 100%)',
          borderRadius: '0.75rem',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '1px solid rgba(16, 185, 129, 0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}
        aria-label="Logistics Route Optimization Preview"
      >
        {/* Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Navigation size={14} color="#fff" />
            </div>
            <span style={{ fontWeight: '700', fontSize: '0.85rem', color: '#f8fafc' }}>
              Route Optimizer <span style={{ fontSize: '0.65rem', color: '#10b981', fontFamily: 'var(--font-mono)' }}>v1.4</span>
            </span>
          </div>
          <span className="badge badge-emerald" style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem' }}>
            -23.4% Distance
          </span>
        </div>

        {/* Visual Route Nodes */}
        <div style={{ background: 'rgba(15, 23, 42, 0.9)', borderRadius: '0.5rem', padding: '0.65rem', border: '1px solid rgba(16, 185, 129, 0.15)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem', fontSize: '0.685rem', color: '#94a3b8' }}>
            <span>Dispatch Sequence:</span>
            <span style={{ color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>TSP Matrix Solved</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.25rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#3b82f6', color: '#fff', fontSize: '0.65rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', margin: '0 auto' }}>D</div>
              <span style={{ fontSize: '0.6rem', color: '#cbd5e1' }}>Depot</span>
            </div>
            <ArrowRight size={12} color="#10b981" />
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#10b981', color: '#fff', fontSize: '0.65rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', margin: '0 auto' }}>1</div>
              <span style={{ fontSize: '0.6rem', color: '#cbd5e1' }}>Belmont</span>
            </div>
            <ArrowRight size={12} color="#10b981" />
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#10b981', color: '#fff', fontSize: '0.65rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', margin: '0 auto' }}>2</div>
              <span style={{ fontSize: '0.6rem', color: '#cbd5e1' }}>Kelvin</span>
            </div>
            <ArrowRight size={12} color="#10b981" />
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#10b981', color: '#fff', fontSize: '0.65rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', margin: '0 auto' }}>3</div>
              <span style={{ fontSize: '0.6rem', color: '#cbd5e1' }}>CBD</span>
            </div>
          </div>
        </div>

        {/* Optimization Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', textAlign: 'center' }}>
          <div style={{ background: 'rgba(2, 6, 23, 0.6)', padding: '0.35rem', borderRadius: '0.375rem' }}>
            <div style={{ fontSize: '0.6rem', color: '#94a3b8' }}>Total Stops</div>
            <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#f8fafc' }}>18 Pkgs</div>
          </div>
          <div style={{ background: 'rgba(2, 6, 23, 0.6)', padding: '0.35rem', borderRadius: '0.375rem' }}>
            <div style={{ fontSize: '0.6rem', color: '#94a3b8' }}>Route Dist</div>
            <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#10b981' }}>34.2 km</div>
          </div>
          <div style={{ background: 'rgba(2, 6, 23, 0.6)', padding: '0.35rem', borderRadius: '0.375rem' }}>
            <div style={{ fontSize: '0.6rem', color: '#94a3b8' }}>Est. Savings</div>
            <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#38bdf8' }}>8.4 Litres</div>
          </div>
        </div>
      </div>
    );
  }

  // Raindrop Technologies Mockup
  return (
    <div 
      style={{
        width: '100%',
        height: '240px',
        background: 'linear-gradient(145deg, #0b1329 0%, #06101e 100%)',
        borderRadius: '0.75rem',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '1px solid rgba(139, 92, 246, 0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}
      aria-label="Raindrop Technologies Portal Preview"
    >
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Building size={14} color="#fff" />
          </div>
          <span style={{ fontWeight: '700', fontSize: '0.85rem', color: '#f8fafc' }}>
            Raindrop Technologies <span style={{ fontSize: '0.65rem', color: '#a78bfa' }}>Inc.</span>
          </span>
        </div>
        <span className="badge badge-purple" style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem' }}>
          Flask + SQLite
        </span>
      </div>

      {/* Services Showcase Preview */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', margin: '0.4rem 0' }}>
        <div style={{ background: 'rgba(15, 23, 42, 0.85)', padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid rgba(139, 92, 246, 0.15)' }}>
          <div style={{ fontSize: '0.65rem', fontWeight: '600', color: '#c4b5fd' }}>Custom Software</div>
          <div style={{ fontSize: '0.6rem', color: '#94a3b8', marginTop: '0.2rem' }}>Scalable architectures</div>
        </div>
        <div style={{ background: 'rgba(15, 23, 42, 0.85)', padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid rgba(139, 92, 246, 0.15)' }}>
          <div style={{ fontSize: '0.65rem', fontWeight: '600', color: '#c4b5fd' }}>Cloud Systems</div>
          <div style={{ fontSize: '0.6rem', color: '#94a3b8', marginTop: '0.2rem' }}>API integrations</div>
        </div>
        <div style={{ background: 'rgba(15, 23, 42, 0.85)', padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid rgba(139, 92, 246, 0.15)' }}>
          <div style={{ fontSize: '0.65rem', fontWeight: '600', color: '#c4b5fd' }}>Tech Support</div>
          <div style={{ fontSize: '0.6rem', color: '#94a3b8', marginTop: '0.2rem' }}>24/7 SLA contracts</div>
        </div>
      </div>

      {/* Database Inquiry Logger Bar */}
      <div style={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '0.375rem', padding: '0.45rem 0.65rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.65rem', color: '#cbd5e1' }}>
          <CheckCircle2 size={13} color="#10b981" />
          <span>Inbound Inquiry Form → SQLite Validated</span>
        </div>
        <span style={{ fontSize: '0.65rem', color: '#a78bfa', fontFamily: 'var(--font-mono)' }}>
          HTTP 200 OK
        </span>
      </div>
    </div>
  );
}
