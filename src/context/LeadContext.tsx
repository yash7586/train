import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  restaurantName: string;
  product: string;
  timestamp: string;
}

interface LeadContextType {
  leads: Lead[];
  addLead: (lead: Omit<Lead, 'id' | 'timestamp'>) => void;
  getLeadCount: () => number;
}

const LeadContext = createContext<LeadContextType | undefined>(undefined);

export function LeadProvider({ children }: { children: ReactNode }) {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const savedLeads = localStorage.getItem('train-delivery-leads');
    if (savedLeads) {
      setLeads(JSON.parse(savedLeads));
    }
  }, []);

  const addLead = (lead: Omit<Lead, 'id' | 'timestamp'>) => {
    const newLead: Lead = {
      ...lead,
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
    };
    const updatedLeads = [...leads, newLead];
    setLeads(updatedLeads);
    localStorage.setItem('train-delivery-leads', JSON.stringify(updatedLeads));
  };

  const getLeadCount = () => leads.length;

  return (
    <LeadContext.Provider value={{ leads, addLead, getLeadCount }}>
      {children}
    </LeadContext.Provider>
  );
}

export function useLeads() {
  const context = useContext(LeadContext);
  if (context === undefined) {
    throw new Error('useLeads must be used within a LeadProvider');
  }
  return context;
}
