'use server';

/**
 * @fileOverview Summarizes customer inquiries using AI.
 *
 * - summarizeInquiry - A function that summarizes the inquiry details.
 * - SummarizeInquiryInput - The input type for the summarizeInquiry function.
 * - SummarizeInquiryOutput - The return type for the summarizeInquiry function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeInquiryInputSchema = z.object({
  message: z.string().describe('The inquiry message to summarize.'),
});
export type SummarizeInquiryInput = z.infer<typeof SummarizeInquiryInputSchema>;

const SummarizeInquiryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the inquiry.'),
});
export type SummarizeInquiryOutput = z.infer<typeof SummarizeInquiryOutputSchema>;

export async function summarizeInquiry(input: SummarizeInquiryInput): Promise<SummarizeInquiryOutput> {
  return summarizeInquiryFlow(input);
}

const summarizeInquiryPrompt = ai.definePrompt({
  name: 'summarizeInquiryPrompt',
  input: {schema: SummarizeInquiryInputSchema},
  output: {schema: SummarizeInquiryOutputSchema},
  prompt: `Summarize the following customer inquiry in a concise manner, highlighting the key points and customer needs:\n\n{{{message}}}`,
});

const summarizeInquiryFlow = ai.defineFlow(
  {
    name: 'summarizeInquiryFlow',
    inputSchema: SummarizeInquiryInputSchema,
    outputSchema: SummarizeInquiryOutputSchema,
  },
  async input => {
    const {output} = await summarizeInquiryPrompt(input);
    return output!;
  }
);
