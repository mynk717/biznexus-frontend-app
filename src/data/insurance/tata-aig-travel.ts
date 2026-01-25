export interface TravelPlan {
  id: string;
  name: string;
  type: 'schengen' | 'asia' | 'worldwide' | 'usa';
  tier: 'silver' | 'silver-plus' | 'gold' | 'platinum' | 'titanium';
  price: {
    daily: number;
    base: number;
    currency: 'INR';
  };
  sumInsured: {
    amount: number;
    currency: 'USD';
  };
  coverage: {
    medical: {
      emergencies: number;
      covid19: boolean;
      dental: number;
      repatriation: number;
      evacuation: number;
    };
    travel: {
      tripCancellation: number;
      tripCurtailment: number;
      flightDelay: number;
      missedConnection: number;
      lostPassport: number;
    };
    baggage: {
      loss: number;
      delay: number;
    };
    liability: {
      personal: number;
    };
  };
  features: string[];
  exclusions: string[];
  ageEligibility: {
    min: number;
    max: number;
  };
}

export const tataAigTravelPlans: Record<string, TravelPlan[]> = {
  schengen: [
    {
      id: 'schengen-silver-plus',
      name: 'Schengen Silver Plus',
      type: 'schengen',
      tier: 'silver-plus',
      price: {
        daily: 40.82,
        base: 1103,
        currency: 'INR'
      },
      sumInsured: {
        amount: 100000,
        currency: 'USD'
      },
      coverage: {
        medical: {
          emergencies: 100000,
          covid19: true,
          dental: 500,
          repatriation: 25000,
          evacuation: 100000
        },
        travel: {
          tripCancellation: 2000,
          tripCurtailment: 2000,
          flightDelay: 100,
          missedConnection: 150,
          lostPassport: 250
        },
        baggage: {
          loss: 1000,
          delay: 75
        },
        liability: {
          personal: 150000
        }
      },
      features: [
        'COVID-19 Coverage Included',
        'Visa Compliant for All Schengen Countries',
        'No Room Rent Capping',
        '24/7 Global Assistance',
        'Instant Policy Issuance',
        'Cashless Hospitalization in Network Hospitals',
        'No Medical Test Required'
      ],
      exclusions: [
        'Pre-existing conditions',
        'Adventure sports without add-on',
        'Self-inflicted injuries',
        'War and nuclear risks',
        'Cosmetic surgery'
      ],
      ageEligibility: {
        min: 3,
        max: 80
      }
    },
    {
      id: 'schengen-platinum',
      name: 'Schengen Platinum',
      type: 'schengen',
      tier: 'platinum',
      price: {
        daily: 54.67,
        base: 1478,
        currency: 'INR'
      },
      sumInsured: {
        amount: 500000,
        currency: 'USD'
      },
      coverage: {
        medical: {
          emergencies: 500000,
          covid19: true,
          dental: 1000,
          repatriation: 125000,
          evacuation: 500000
        },
        travel: {
          tripCancellation: 5000,
          tripCurtailment: 5000,
          flightDelay: 200,
          missedConnection: 300,
          lostPassport: 500
        },
        baggage: {
          loss: 2000,
          delay: 150
        },
        liability: {
          personal: 250000
        }
      },
      features: [
        'COVID-19 Coverage Included',
        'Higher Sum Insured - $500,000',
        'Visa Compliant',
        'Enhanced Trip Cancellation Cover',
        'Higher Baggage Loss Coverage',
        '24/7 Global Assistance',
        'Automatic Extensions Available'
      ],
      exclusions: [
        'Pre-existing conditions',
        'Adventure sports without add-on',
        'Self-inflicted injuries',
        'War and nuclear risks'
      ],
      ageEligibility: {
        min: 3,
        max: 80
      }
    },
    {
      id: 'schengen-titanium',
      name: 'Schengen Titanium',
      type: 'schengen',
      tier: 'titanium',
      price: {
        daily: 91.19,
        base: 2462,
        currency: 'INR'
      },
      sumInsured: {
        amount: 1000000,
        currency: 'USD'
      },
      coverage: {
        medical: {
          emergencies: 1000000,
          covid19: true,
          dental: 2000,
          repatriation: 250000,
          evacuation: 1000000
        },
        travel: {
          tripCancellation: 10000,
          tripCurtailment: 10000,
          flightDelay: 300,
          missedConnection: 500,
          lostPassport: 1000
        },
        baggage: {
          loss: 3000,
          delay: 200
        },
        liability: {
          personal: 500000
        }
      },
      features: [
        'COVID-19 Coverage Included',
        'Maximum Coverage - $1,000,000',
        'Premium Visa Compliance',
        'Comprehensive Trip Protection',
        'Maximum Baggage Coverage',
        'Personal Accident Cover ₹20 Lakhs',
        'Adventure Sports Add-on Available',
        'Priority Customer Support'
      ],
      exclusions: [
        'Pre-existing conditions (except life-threatening)',
        'Self-inflicted injuries',
        'War and nuclear risks'
      ],
      ageEligibility: {
        min: 3,
        max: 80
      }
    }
  ],
  asia: [
    {
      id: 'asia-silver',
      name: 'Asia Silver',
      type: 'asia',
      tier: 'silver',
      price: {
        daily: 45.5,
        base: 660,
        currency: 'INR'
      },
      sumInsured: {
        amount: 50000,
        currency: 'USD'
      },
      coverage: {
        medical: {
          emergencies: 50000,
          covid19: true,
          dental: 300,
          repatriation: 12500,
          evacuation: 50000
        },
        travel: {
          tripCancellation: 1000,
          tripCurtailment: 1000,
          flightDelay: 75,
          missedConnection: 100,
          lostPassport: 250
        },
        baggage: {
          loss: 500,
          delay: 50
        },
        liability: {
          personal: 100000
        }
      },
      features: [
        'COVID-19 Coverage',
        'Covers All Asian Destinations',
        'Quick Claims Settlement',
        'No Medical Test Required',
        'Instant Policy Issuance'
      ],
      exclusions: [
        'Pre-existing conditions',
        'Adventure sports',
        'War risks'
      ],
      ageEligibility: {
        min: 3,
        max: 80
      }
    }
  ],
  usa: [
    {
      id: 'usa-platinum',
      name: 'USA Platinum',
      type: 'usa',
      tier: 'platinum',
      price: {
        daily: 60.32,
        base: 2200,
        currency: 'INR'
      },
      sumInsured: {
        amount: 500000,
        currency: 'USD'
      },
      coverage: {
        medical: {
          emergencies: 500000,
          covid19: true,
          dental: 1500,
          repatriation: 125000,
          evacuation: 500000
        },
        travel: {
          tripCancellation: 7500,
          tripCurtailment: 7500,
          flightDelay: 250,
          missedConnection: 400,
          lostPassport: 750
        },
        baggage: {
          loss: 2500,
          delay: 200
        },
        liability: {
          personal: 300000
        }
      },
      features: [
        'High Medical Coverage for USA',
        'COVID-19 Treatment Covered',
        'Emergency Medical Evacuation',
        'Trip Delay & Cancellation',
        'Lost Baggage Coverage',
        '24/7 USA Helpline'
      ],
      exclusions: [
        'Pre-existing conditions',
        'Adventure sports',
        'War and terrorism'
      ],
      ageEligibility: {
        min: 3,
        max: 75
      }
    }
  ]
};

export const getAllTravelPlans = (): TravelPlan[] => {
  return Object.values(tataAigTravelPlans).flat();
};

export const getPlansByType = (type: string): TravelPlan[] => {
  return tataAigTravelPlans[type] || [];
};

export const getPlanById = (id: string): TravelPlan | undefined => {
  return getAllTravelPlans().find(plan => plan.id === id);
};
